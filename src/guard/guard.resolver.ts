import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { GuardService } from "./guard.service";
import { Guard } from "./entities/guard.entity";
import { CreateGuardInput } from "./dto/create-guard.input";
import { UpdateGuardInput } from "./dto/update-guard.input";
import { Volunteer, VolunteerModel } from "../volunteers/entities/volunteer.entity";
import { ServiceModel } from "../services/entities/service.entity";
import { VolunteersService } from "../volunteers/volunteers.service";

@Resolver(() => Guard)
export class GuardResolver {
  constructor(private readonly guardService: GuardService, private volunteerService: VolunteersService) {}

  @Mutation(() => Guard)
  createGuard(@Args("createGuardInput") createGuardInput: CreateGuardInput) {
    return this.guardService.create(createGuardInput);
  }

  @Query(() => [Guard], { name: "guards" })
  findAll() {
    return this.guardService.findAll();
  }

  @Query(() => [Guard])
  guardsDisabled() {
    return this.guardService.findAll(true);
  }

  @Query(() => Guard, { name: "guard" })
  findOne(@Args("id") id: string) {
    return this.guardService.findOne(id);
  }

  @Query(() => Guard, { nullable: true })
  currentGuard() {
    return this.guardService.findCurrent();
  }

  @Query(() => Guard, { nullable: true })
  nextGuard() {
    return this.guardService.findNext();
  }

  @Mutation(() => Guard)
  updateGuard(@Args("updateGuardInput") updateGuardInput: UpdateGuardInput) {
    return this.guardService.update(updateGuardInput.id, updateGuardInput);
  }

  @Mutation(() => Guard)
  removeGuard(@Args("id") id: string) {
    return this.guardService.remove(id);
  }

  @Mutation(() => Guard)
  restoreGuard(@Args("id") id: string) {
    return this.guardService.restore(id);
  }

  @ResolveField(() => [Volunteer])
  volunteers(@Parent() service: ServiceModel): Promise<VolunteerModel[]> {
    return this.volunteerService.findMany(service.volunteers.map((volunteer) => volunteer._id.toString()));
  }
}
