import { Types } from 'mongoose';
import { ObjectType, Field } from 'type-graphql';
import { prop, getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class Note {
  @Field()
  readonly _id!: Types.ObjectId;

  @Field()
  @prop({ required: true })
  title!: string;

  @Field()
  @prop({ required: true })
  description!: string;
}

const NoteModel = getModelForClass(Note);

export default NoteModel;
