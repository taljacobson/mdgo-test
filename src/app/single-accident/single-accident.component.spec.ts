import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAccidentComponent } from './single-accident.component';

describe('SingleAccidentComponent', () => {
  let component: SingleAccidentComponent;
  let fixture: ComponentFixture<SingleAccidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAccidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAccidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
