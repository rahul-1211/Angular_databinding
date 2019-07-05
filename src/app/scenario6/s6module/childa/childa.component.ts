import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childa',
  templateUrl: './childa.component.html',
  styleUrls: ['./childa.component.css']
})
export class ChildaComponent implements OnInit {

  constructor() { }
  @Output() public childatoparent3=new EventEmitter();
  onClick(value){
    this.childatoparent3.emit(value);
  }

  ngOnInit() {
  }

}
