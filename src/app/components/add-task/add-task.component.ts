import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
import { GenerateIdService } from 'src/app/services/generate-id.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter

  title?: string;
  currentTime:string = '';
  deadlineDate?: string;
  completed: boolean = false;
  showAddTask?: boolean;
  subscription: Subscription;

  constructor(private _uiService: UiService,
    private _generateId: GenerateIdService) {
    this.subscription = this._uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  titleHasError: boolean = false;
  dateHasError: boolean = false;

  onSubmit() {
    if (!this.title) {
      this.titleHasError = true;
      return;
    }
    this.currentTime = new Date().toString()

    const newTask = {
      id: this._generateId.generateRandomId(64),
      title: this.title,
      currentTime: this.currentTime,
      deadlineDate: this.deadlineDate,
      completed: this.completed
    }

    this.onAddTask.emit(newTask);
    this.titleHasError = false;

    this.title = '';
    this.deadlineDate = '';
    this.completed = false;
  }
}