import { Component, OnInit,  } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-child7a',
  templateUrl: './child7a.component.html',
  styleUrls: ['./child7a.component.css']
})
export class Child7aComponent implements OnInit {
  
user: string;
editUser:string;
  constructor(private firstservice: FirstService) {}
  
  ngOnInit() {
    this.firstservice.cast.subscribe(user=> this.user=user);
  }
  onclick(){
    this.firstservice.editUser(this.editUser);
  }

}
