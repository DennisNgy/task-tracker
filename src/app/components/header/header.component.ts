import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'task-tracker';
  showAddTask?: boolean;
  subscription?: Subscription;
  constructor(private _uiService:UiService) {
    this.subscription = this._uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this._uiService.toggleAddTask();
  }
}
