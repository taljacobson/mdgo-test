import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onMenuToggle() {
    this.menuToggle.emit();
  }
}
