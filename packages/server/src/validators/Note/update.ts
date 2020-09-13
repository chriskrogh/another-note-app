import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class UpdateNoteInput {
  @Field({ nullable: true })
  @Length(1, 50)
  title?: string;

  @Field({ nullable: true })
  @Length(1, 500)
  description?: string;
}
