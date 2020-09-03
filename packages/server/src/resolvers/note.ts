import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import NoteModel, { Note } from '../models/note';

@Resolver(Note)
class NoteResolver {
  @Query(() => Note)
  async allNotes(): Promise<Note[]> {
    return await NoteModel.find({});
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('title') title: string,
    @Arg('description') description: string,
  ): Promise<Note> {
    return await new NoteModel({ title, description }).save();
  }
}

export default NoteResolver;
