import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }
  @Output() public parent2togp=new EventEmitter();
  message(value){
    this.parent2togp.emit(value);
   
  }

  ngOnInit() {
  }

}
