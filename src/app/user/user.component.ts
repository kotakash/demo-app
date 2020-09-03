import { Component, OnInit } from '@angular/core';
import { UserName } from '../userName';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public result;
  userNameModel = new UserName('');
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    
    this.result="Hello! " + this.userNameModel.userName;
  }
}
