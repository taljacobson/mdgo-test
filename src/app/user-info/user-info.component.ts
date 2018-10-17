import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  userInfo = {
    userName: 'user Name',
    last_login: new Date().toLocaleDateString(),
    imageUrl: 'https://via.placeholder.com/50x50'
  };

  constructor() { }

  ngOnInit() {
  }

}
