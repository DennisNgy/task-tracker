import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  isDropDownOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
}
