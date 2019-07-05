import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirstService {
  


  constructor() {
    
   }
  
   private user=new BehaviorSubject<string>('rahul');
   cast=this.user.asObservable();
   editUser(newUser){
     this.user.next(newUser);
   }
}
