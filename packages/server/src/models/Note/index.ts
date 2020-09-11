import type { Ref } from '@typegoose/typegoose';
import type { ObjectId } from 'mongodb';

import { ObjectType, Field } from 'type-graphql';
import { prop, getModelForClass } from '@typegoose/typegoose';
import { User } from '../User';

@ObjectType()
export class Note {
  @Field(() => String)
  readonly _id!: ObjectId;

  @Field()
  @prop({ required: true })
  title!: string;

  @Field()
  @prop({ required: true })
  description!: string;

  @Field(() => String)
  @prop({ required: true, ref: User })
  owner!: Ref<User, ObjectId>;
}

const NoteModel = getModelForClass(Note);

export default NoteModel;
