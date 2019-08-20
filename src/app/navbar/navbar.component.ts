import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  btnStyleGroup1: string[];
  btnStyleGroup2: string[];
  key1: string = 'INDUSTRIES'
  key2: string = 'BUSINESS FUNCTIONS'

  constructor() {
    this.btnStyleGroup1 = ['btn-default','btn-default','btn-default','btn-default','btn-default'];
    this.btnStyleGroup2 = ['btn-default','btn-default','btn-default','btn-default','btn-default','btn-default','btn-default'];
   }
  
  ngOnInit() {
    localStorage.clear();
  }

  public evaluateButtonGroup1(Value){
    let previousValue = localStorage.getItem(this.key1);
    if(previousValue != undefined){
      this.btnStyleGroup1[ parseInt(previousValue, 10) -1] = 'btn-default'
    }
    localStorage.setItem(this.key1, Value);
    this.btnStyleGroup1[Value -1] = 'btn-change';
  }

  public evaluateButtonGroup2(Value){
    let previousValue = localStorage.getItem(this.key2);
    if(previousValue != undefined){
      this.btnStyleGroup2[ parseInt(previousValue, 10) -1] = 'btn-default'
    }
    localStorage.setItem(this.key2, Value);
    this.btnStyleGroup2[Value -1] = 'btn-change';
  }
}
