/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from 'src/dto/tasks.dto';
import { Task, TaskDocument } from 'src/models/tasks.models';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Add(body: TaskDto) {
    return this.taskModel.create(body);
  }

  FindAll() {
    return this.taskModel.find();
  }

  FindOne(id: string) {
    return this.taskModel.findById(id);
  }

  Update(id: string, body: TaskDto) {
    return this.taskModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }

  Search(key: string) {
    const keyword = key 
    ? {
      $or: [
        { taskname: { $regex: key, $options : 'i' } },
        { description: { $regex: key, $options : 'i' } }
      ],
    }
    : {};
    return this.taskModel.find(keyword);
  }
}
