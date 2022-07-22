import { InputType, Field } from "@nestjs/graphql";
import { OnlyIdUserInput } from "../../users/dto/only-id-user-input";

@InputType()
export class CreateEventInput {
  @Field()
  description: string;

  @Field(() => OnlyIdUserInput, { nullable: true })
  created_by?: OnlyIdUserInput;
}
