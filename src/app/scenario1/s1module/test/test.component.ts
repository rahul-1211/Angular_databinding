import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  onClick(value){
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
