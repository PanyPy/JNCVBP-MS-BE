import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from "@nestjs/graphql";
import { EventsService } from "./events.service";
import { Event, EventModel } from "./entities/event.entity";
import { CreateEventInput } from "./dto/create-event.input";
import { UpdateEventInput } from "./dto/update-event.input";
import { User } from "../users/entities/user.entity";
import { UsersService } from "../users/users.service";

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService, private usersService: UsersService) {}

  @Mutation(() => Event)
  createEvent(@Args("createEventInput") createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: "events" })
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => [Event])
  eventsDisabled() {
    return this.eventsService.findAll(true);
  }

  @Query(() => Event, { name: "event" })
  findOne(@Args("id") id: string) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => Event)
  updateEvent(@Args("updateEventInput") updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args("id") id: string) {
    return this.eventsService.remove(id);
  }

  @Mutation(() => Event)
  restoreEvent(@Args("id") id: string) {
    return this.eventsService.restore(id);
  }

  @ResolveField(() => User)
  created_by(@Parent() event: EventModel) {
    return this.usersService.findOne(event.created_by?._id?.toString());
  }
}
