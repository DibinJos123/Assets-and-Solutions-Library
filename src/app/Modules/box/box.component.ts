import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
  @Input() Data: string
  @Input() image: string
  @Input() title: string
  constructor() { 
    console.log("sdsdfsdfsd",this.image)
  }



}
