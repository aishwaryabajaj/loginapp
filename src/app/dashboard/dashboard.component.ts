import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userids=[];
  constructor(private user: UserService, private _data:DataService) { }

  ngOnInit() {
    this._data.userid.subscribe(res => this.userids=res); 
  }
addItem(){
  this._data.changeUserid(this.userids);
}
}