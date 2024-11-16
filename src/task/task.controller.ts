/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { taskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService:TaskService) {

    }


    @Post()
    create(@Body() task: taskDto){
        this.taskService.create(task)
       
    }
}
