import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child7b',
  templateUrl: './child7b.component.html',
  styleUrls: ['./child7b.component.css']
})
export class Child7bComponent implements OnInit {
user:string;
  constructor(private firstservice: FirstService) { }

  ngOnInit() {
    this.firstservice.cast.subscribe(user=> this.user=user);
  }

}
