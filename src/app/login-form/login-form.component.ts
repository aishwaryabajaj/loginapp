import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userids=[];
  constructor(private router: Router, private user:UserService, private _data:DataService) { }

  ngOnInit() {
    this._data.userid.subscribe(res => this.userids =res);
    this._data.changeUserid(this.userids);
  }

  addItem(){
    this._data.changeUserid(this.userids);
  }

  loginUser(e) {

    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if ((username == 'aishwarya@ITHtech.co.in' && password == 'aishwarya123')||
    (username == 'tom@ITHtech.co.in' && password == 'tom123')||
    (username == 'jerry@ITHtech.co.in' && password == 'jerry123')) {
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
    else
    alert('invalid credentials!!');
  }
}
