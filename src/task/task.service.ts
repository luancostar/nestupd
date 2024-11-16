import { Injectable } from '@nestjs/common';
import { taskDto } from './task.dto';

@Injectable()
export class TaskService {

private tasks: taskDto [] = [];

create(task: taskDto){
    this.tasks.push(task);
    console.log(this.tasks);
}

}