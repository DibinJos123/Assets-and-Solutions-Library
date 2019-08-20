import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() clickInfo = new EventEmitter<any>();
 


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
    let group2Value = parseInt(localStorage.getItem(this.key2),10);
    this.clickInfo.emit({'Group1' : Value, 'Group2' :group2Value} )
  }

  public evaluateButtonGroup2(Value){
    let previousValue = localStorage.getItem(this.key2);
    if(previousValue != undefined){
      this.btnStyleGroup2[ parseInt(previousValue, 10) -1] = 'btn-default'
    }
    localStorage.setItem(this.key2, Value);
    this.btnStyleGroup2[Value -1] = 'btn-change';
    let group1Value = parseInt(localStorage.getItem(this.key1),10);
    this.clickInfo.emit({'Group1' :group1Value, 'Group2' :Value} )
  }
}
