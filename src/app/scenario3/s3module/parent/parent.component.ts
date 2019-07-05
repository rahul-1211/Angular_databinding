import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  public name="";
  onClick(value){
    console.log(value)
    this.name=value;
  }

  ngOnInit() {
  }

}
