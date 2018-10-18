import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Accident, AccidentService } from '../accident.service';

@Component({
  selector: 'app-single-accident',
  templateUrl: './single-accident.component.html',
  styleUrls: ['./single-accident.component.scss']
})
export class SingleAccidentComponent implements OnInit {

  accident$: Observable<Accident>;
  constructor(private route: ActivatedRoute, private accidenthService: AccidentService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.accident$ = this.accidenthService.getSingle(id);
  }

}
