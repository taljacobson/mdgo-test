import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Accident, AccidentService } from '../accident.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events$: Observable<Accident[]>;
  treated$: Observable<Accident[]>;
  constructor(private accidentService: AccidentService) {}

  ngOnInit() {
    const sortByDate = (accidents: Accident[]): Accident[] =>
      accidents.sort((a, b) => new Date(b.EventTime).getTime() - new Date(a.EventTime).getTime());

    this.events$ = this.accidentService.unTreated.pipe(map(sortByDate));
    this.treated$ = this.accidentService.treated.pipe(map(sortByDate));
  }
}
