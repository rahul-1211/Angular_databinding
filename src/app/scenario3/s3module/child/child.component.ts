import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input()  parentData;
  constructor() { }
  // x = "asda"
  ngOnInit() {
  }
  ngOnChanges(data) {
    //console.log(this.parentData)
    // console.log(data.parentData.currentValue)
    // this.parentData = data.parentData.currentValue

  }

}
