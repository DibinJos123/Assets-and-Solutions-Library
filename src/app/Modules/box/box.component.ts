import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
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
export class BoxComponent {
  @Input() Data: string
  @Input() image: string
  @Input() title: string;

  currentState:any='initial';
  elevation : string = ""
  constructor() { 
    console.log("sdsdfsdfsd",this.image);
    this.transition();
  }

  transition(){
  setTimeout(()=>
  {
    this.currentState = 'final'
  },100) 
};

changeStyle($event){
  this.elevation = $event.type == 'mouseover' ? 'shadow' : '';
  console.log("The elevation is",this.elevation);
}



}
