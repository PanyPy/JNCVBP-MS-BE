import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
class SubTypeCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class PossibleCausesCount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class Detail1040 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class Detail1041 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class Detail1043 {
  @Field({ nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  count: number;
}

@ObjectType()
class DamageCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
class Quantities1044Count {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
class ResourcesUsedCount {
  @Field()
  id: string;

  @Field()
  count: number;
}

@ObjectType()
export class Report {
  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => Date, { nullable: true })
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate: Date;

  @Field(() => [Detail1040], { nullable: true })
  subTypeCount1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  subTypeCount1041: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  subTypeCount1043: Detail1043[];

  @Field({ nullable: true })
  count1040: Number;

  @Field({ nullable: true })
  count1041: Number;

  @Field({ nullable: true })
  count1043: Number;

  @Field(() => [Detail1040], { nullable: true })
  damageCount: Detail1040[];

  @Field(() => [Detail1040], { nullable: true })
  quantities1044Count1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  quantities1044Count1041: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  quantities1044Count1043: Detail1043[];

  @Field(() => [Detail1040], { nullable: true })
  possibleCausesCount: Detail1040[];

  @Field(() => [Detail1040], { nullable: true })
  resourcesUsedCount1040: Detail1040[];

  @Field(() => [Detail1041], { nullable: true })
  resourcesUsedCount1041: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  damage1041Count: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  involvedElementsCount: Detail1041[];

  @Field(() => [Detail1041], { nullable: true })
  magnitude1041Count: Detail1041[];

  @Field(() => [Detail1043], { nullable: true })
  rescueTypeCount: Detail1043[];
}
