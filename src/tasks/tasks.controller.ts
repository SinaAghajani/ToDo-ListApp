import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.schema';

@Controller('todos')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // دریافت همه تسک‌ها
  @Get()
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  // اضافه کردن تسک جدید
  @Post()
  async addTask(@Body() task: Task): Promise<Task> {
    return this.tasksService.addTask(task);
  }

  // ویرایش تسک
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.tasksService.updateTask(id, task);
  }

  // حذف تسک
  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }
}
