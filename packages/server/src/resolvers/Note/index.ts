import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import NoteModel, { Note } from '../../models/Note';
import { CreateNoteInput } from '../../validators/Note/create';

@Resolver(Note)
class NoteResolver {
  @Query(() => [Note])
  async allNotes(): Promise<Note[]> {
    return await NoteModel.find({}).exec();
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('data') { title, description }: CreateNoteInput,
  ): Promise<Note> {
    return await new NoteModel({ title, description }).save();
  }
}

export default NoteResolver;
