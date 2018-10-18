import { Component, OnInit } from '@angular/core';
import { AccidentService } from './accident.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mdgo-test';
  sideMenuOpen = new BehaviorSubject<boolean>(true);
  constructor(private accidentSrv: AccidentService) {}

  ngOnInit() {
    this.accidentSrv.initAcidents();
  }

  public toggleSideMenu() {
    this.sideMenuOpen.next(!this.sideMenuOpen.value);
  }
}
