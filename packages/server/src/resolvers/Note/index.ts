import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import NoteModel, { Note } from '../../models/Note';
import { CreateNoteInput } from '../../validators/Note/create';
import { UpdateNoteInput } from '../../validators/Note/update';

@Resolver(Note)
class NoteResolver {
  @Query(() => [Note])
  async myNotes(@Arg('owner') owner: string): Promise<Note[]> {
    return await NoteModel.find({ owner });
  }

  @Mutation(() => Note)
  async createNote(
    @Arg('data') { title, description, owner }: CreateNoteInput,
  ): Promise<Note> {
    return await NoteModel.create({ title, description, owner });
  }

  @Mutation(() => Note, { nullable: true })
  async updateNote(
    @Arg('id') id: string,
    @Arg('data') { title, description }: UpdateNoteInput,
  ): Promise<void> {
    await NoteModel.findByIdAndUpdate(id, { title, description });
  }

  @Mutation(() => Note, { nullable: true })
  async deleteNote(@Arg('id') id: string): Promise<Note | null> {
    return await NoteModel.findByIdAndDelete(id);
  }
}

export default NoteResolver;
