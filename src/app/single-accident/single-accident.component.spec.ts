import { AgmCoreModule } from '@agm/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AccidentService } from '../accident.service';
import { SingleAccidentComponent } from './single-accident.component';

describe('SingleAccidentComponent', () => {
  let component: SingleAccidentComponent;
  let fixture: ComponentFixture<SingleAccidentComponent>;
  const accidentServiceSpy = jasmine.createSpyObj('AccidenthService', ['getSingle']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgmCoreModule],
      declarations: [SingleAccidentComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: id => '123-123-123',
              },
            },
          } as ActivatedRoute,
        },
        { provide: AccidentService, useValue: accidentServiceSpy },
      ],
    }).compileComponents();
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
