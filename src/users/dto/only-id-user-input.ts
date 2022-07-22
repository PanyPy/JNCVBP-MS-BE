import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class OnlyIdUserInput {
  @Field()
  _id: string;
}
