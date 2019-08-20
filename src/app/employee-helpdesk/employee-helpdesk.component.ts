import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-employee-helpdesk',
  templateUrl: './employee-helpdesk.component.html',
  styleUrls: ['./employee-helpdesk.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        opacity:"0",
      })),
      state('final', style({
        opacity:"1",
      })),
      transition('initial=>final', animate('2500ms ease-in')),
      transition('final=>initial', animate('1000ms'))
    ])]
})
export class EmployeeHelpdeskComponent implements OnInit {

  currentState = 'initial';
  
  constructor() { }

  ngOnInit() {
    this.changeState();
  }

  changeState() {
    setTimeout(()=>
    {
      this.currentState = 'final'
    },100) ;
  }

}
