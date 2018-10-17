import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  navItems = [{
    label: 'Dashboard',
    link: 'home',
    icon: 'palette',
  }];
  constructor() { }

  ngOnInit() {
  }

}
