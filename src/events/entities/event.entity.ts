import { ObjectType, Field } from "@nestjs/graphql";
import { Volunteer } from "../../volunteers/entities/volunteer.entity";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";
import { User } from "../../users/entities/user.entity";

@ObjectType()
export class Event {
  @Field()
  id: string;

  @Field()
  _id: string;

  @Field()
  description: string;

  // This needs to be changed to User, when implemented
  @Field(() => User, { nullable: true })
  created_by?: User;

  // This needs to be changed to User, when implemented
  @Field({ nullable: true })
  createdAt: Date;
}

export const EventSchema = new Schema(
  {
    description: String,
    created_by: {
      _id: { type: Schema.Types.ObjectId, ref: "User" },
    },
    disabled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export class EventModel extends Document {
  _id: ObjectId;

  description: string;

  created_by?: { _id: string };
  createdAt: Date;

  disabled: boolean;
}
