import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childb',
  templateUrl: './childb.component.html',
  styleUrls: ['./childb.component.css']
})
export class ChildbComponent implements OnInit {

  constructor() { }
 @Input() public parentData="";

  ngOnInit() {
  }

}
