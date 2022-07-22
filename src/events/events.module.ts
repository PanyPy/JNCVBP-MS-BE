import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsResolver } from "./events.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { EventSchema } from "./entities/event.entity";
import { VolunteersModule } from "../volunteers/volunteers.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Event", schema: EventSchema }]), UsersModule],
  providers: [EventsResolver, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
