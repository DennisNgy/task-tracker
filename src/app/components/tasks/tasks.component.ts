import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    console.log(task)
    this._taskService.deleteTask(task).subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed;
    this._taskService.updateTaskCompleted(task).subscribe();
  }

  addTask(task: Task) {
    this._taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
