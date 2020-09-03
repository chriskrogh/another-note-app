import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateNoteInput {
  @Field()
  @Length(1, 50)
  title!: string;

  @Field()
  @Length(1, 500)
  description!: string;
}
