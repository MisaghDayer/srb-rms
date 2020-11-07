import {AfterViewInit, Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  submitting: boolean;
  loggedIn: boolean;

  dataSource = [
    { name: 'Hi', value: 56},
    { name: 'Hello', value: 853},
    { name: 'Hello', value: 853},
    { name: 'Hello', value: 853},
    { name: 'Hello', value: 853},
  ];

  columnsToDisplay = [
    '_row',
    'name',
    'value'
  ];

  items = [
    {value: 'I can be dragged', disabled: false},
    {value: 'I cannot be dragged', disabled: true},
    {value: 'I can also be dragged', disabled: false}
  ];

  constructor() {
  }

  ngAfterViewInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    const date: Date = new Date();
    console.log('Date = ' + date);
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
