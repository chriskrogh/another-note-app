import {
  Resolver,
  Query,
  Subscription,
  Mutation,
  Arg,
  PubSub,
  PubSubEngine,
} from 'type-graphql';
import NoteModel, { Note } from '../../models/Note';
import { CreateNoteInput } from '../../validators/Note/create';
import { UpdateNoteInput } from '../../validators/Note/update';

const NOTES_KEY = 'NOTES';

@Resolver(Note)
class NoteResolver {
  @Query(() => [Note])
  async myNotes(@Arg('owner') owner: string): Promise<Note[]> {
    return await NoteModel.find({ owner });
  }

  @Subscription(() => [Note], {
    topics: NOTES_KEY,
    filter: ({ payload, args }) => args.owner === payload,
  })
  async subToMyNotes(@Arg('owner') owner: string): Promise<Note[]> {
    return await NoteModel.find({ owner });
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('data') { title, description, owner }: CreateNoteInput,
    @PubSub() pubSub: PubSubEngine,
  ): Promise<Note> {
    const note = await NoteModel.create({ title, description, owner });
    await pubSub.publish(NOTES_KEY, owner);
    return note;
  }

  @Mutation(() => Note, { nullable: true })
  async updateNote(
    @Arg('id') id: string,
    @Arg('data') { title, description }: UpdateNoteInput,
    @PubSub() pubSub: PubSubEngine,
  ): Promise<void> {
    const updates = { title, description };
    if (!title) delete updates['title'];
    if (!description) delete updates['description'];
    await NoteModel.findByIdAndUpdate(id, updates);
    await pubSub.publish(NOTES_KEY, id);
  }

  @Mutation(() => Note, { nullable: true })
  async deleteNote(
    @Arg('id') id: string,
    @PubSub() pubSub: PubSubEngine,
  ): Promise<void> {
    await NoteModel.findByIdAndDelete(id);
    await pubSub.publish(NOTES_KEY, id);
  }
}

export default NoteResolver;
