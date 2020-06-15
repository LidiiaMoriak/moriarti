import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject()

  constructor() { }
  
  sendMsg(product,action){
    this.subject.next([product,action])
   //Triggering an event
}

getMsg(){
  return this.subject.asObservable()
}
}
