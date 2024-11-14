import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';
import { Types } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) { }

  // دریافت همه تسک‌ها
  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  // اضافه کردن تسک جدید
  async addTask(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  // ویرایش تسک
  async updateTask(id: string, updatedTask: Task): Promise<Task> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId');
    }
    return this.taskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec();
  }

  // حذف تسک
  async deleteTask(id: string): Promise<Task> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ObjectId');
    }
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
