import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userids= new BehaviorSubject<any>(['aishwarya@ITHtech.co.in','tom@ITHtech.co.in','jerry@ITHtech.co.in']);
  userid = this.userids.asObservable();
  constructor() { }

  changeUserid(userid){
    this.userids.next(userid);
  }
}
