import { Injectable } from "@nestjs/common";
import { CreateGuardInput } from "./dto/create-guard.input";
import { UpdateGuardInput } from "./dto/update-guard.input";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GuardModel } from "./entities/guard.entity";

@Injectable()
export class GuardService {
  constructor(@InjectModel("Guard") private model: Model<GuardModel>) {}

  create(createGuardInput: CreateGuardInput) {
    return this.model.create(createGuardInput);
  }

  findAll(disabled = false) {
    return this.model.find().where({ disabled });
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateGuardInput: UpdateGuardInput) {
    return this.model.findOneAndUpdate({ _id: id }, updateGuardInput);
  }

  remove(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: true });
  }

  restore(id: string) {
    return this.model.findOneAndUpdate({ _id: id }, { disabled: false });
  }

  findCurrent() {
    const currentTime = new Date();
    return this.model.findOne().where({
      $and: [{ start_time: { $lte: currentTime } }, { end_time: { $gte: currentTime } }, { disabled: false }],
    });
  }

  findNext() {
    const currentTime = new Date();
    return this.model
      .findOne()
      .where({ $and: [{ start_time: { $gte: currentTime } }, { disabled: false }] })
      .sort({ start_time: -1 })
      .limit(1);
  }
}
