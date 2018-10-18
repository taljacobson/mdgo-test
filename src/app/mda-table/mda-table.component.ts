import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accident } from '../accident.service';

@Component({
  selector: 'app-mda-table',
  templateUrl: './mda-table.component.html',
  styleUrls: ['./mda-table.component.scss'],
})
export class MdaTableComponent implements OnInit {
  @Input()
  accidents: Accident;
  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * navigate to singleAccident page with param;
   * @param mda the id of a the [Accident]
   */
  goTo(mda: string) {
    this.router.navigate(['singleAccident', mda]);
  }

  /**
   * keeps track for angular change Detection
   */
  trackByMDA(item: Accident) {
    return item.MDA;
  }
}
