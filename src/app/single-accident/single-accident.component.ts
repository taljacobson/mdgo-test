import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-accident',
  templateUrl: './single-accident.component.html',
  styleUrls: ['./single-accident.component.scss']
})
export class SingleAccidentComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

  }

}
