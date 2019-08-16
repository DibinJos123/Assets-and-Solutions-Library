import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
    ]),

    trigger('changeHeader', [
      state('initial', style({
        opacity:"1",
      })),
      state('final', style({
        opacity:"0",
        display:'none'
      })),
      transition('initial=>final', animate('250ms ease-out')),
      transition('final=>initial', animate('250ms ease-in'))
    ]),

    
    trigger('changeHeader2', [
      state('initial', style({
        opacity:"1",
      })),
      state('final', style({
        opacity:"0",
        display:'none'
      })),
      transition('initial=>final', animate('250ms ease-in')),
      transition('final=>initial', animate('250ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  currentState = 'initial';
  currentHeaderState = 'initial';
  finalHeaderState = 'final';
  firstHeader:boolean = true;
  secondHeader:boolean = false;

  ngOnInit() {
    this.changeState();
  }
  changeState() {
    setTimeout(()=>
    {
      this.currentState = 'final'
    },100) ;
  }

  @HostListener('window:scroll', ['$event'])
onWindowScroll($event) {

if(window.pageYOffset == 0)
{
  this.currentHeaderState = 'initial';
  this.finalHeaderState = 'final';
  this.firstHeader = true;
  this.secondHeader = false;

}
else{
  this.currentHeaderState = 'final';
  this.finalHeaderState = 'initial'
  this.firstHeader = false;
  this.secondHeader = true;
}
}

}
