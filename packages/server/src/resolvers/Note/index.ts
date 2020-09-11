import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import NoteModel, { Note } from '../../models/Note';
import { CreateNoteInput } from '../../validators/Note/create';

@Resolver(Note)
class NoteResolver {
  @Query(() => [Note])
  async myNotes(@Arg('owner') owner: string): Promise<Note[]> {
    return await NoteModel.find({ owner }).exec();
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('data') { title, description, owner }: CreateNoteInput,
  ): Promise<Note> {
    return await NoteModel.create({ title, description, owner });
  }
}

export default NoteResolver;
