import { Component, OnInit, Output, Input } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  public name="";
  message(value){
    this.name=value;
  }

  constructor() { }

  ngOnInit() {
  }

}
