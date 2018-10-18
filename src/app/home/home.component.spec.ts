import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AccidentService } from '../accident.service';
import { Accident } from '../accident.service';
import { MdaTableComponent } from './../mda-table/mda-table.component';
import { HomeComponent } from './home.component';

const mockAccident: Accident[] = [
  {
    EventTime: '9/27/2018 2:35:27 AM',
    mechanism: 'Side left',
    kinematic: 'low',
    isTreated: true,
    gps: {
      latitude: 30.0388868,
      longitude: 35.1031228,
    },
    MDA: 'c3ff3195-0b6e-4837-9617-da505cd7a397',
    injuries: [
      {
        severity: 'low',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        location: 'left foot',
      },
      {
        severity: 'low',
        // tslint:disable-next-line:max-line-length
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'right tibia',
      },
    ],
  },
  {
    EventTime: '10/1/2018 10:22:42 AM',
    mechanism: 'Side right',
    kinematic: 'medium',
    isTreated: false,
    gps: {
      latitude: 32.1915391,
      longitude: 34.9561126,
    },
    MDA: 'c69b4e3b-a427-4dea-977d-3bfe5641f24d',
    injuries: [
      {
        severity: 'medium',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        location: 'chest',
      },
    ],
  },
];

class AccidenthServiceStub {
  get unTreated() {
    return of(mockAccident.filter(({ isTreated }) => !isTreated));
  }
  get treated() {
    return of(mockAccident.filter(({ isTreated }) => isTreated));
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent, MdaTableComponent],
      providers: [{ provide: AccidentService, useClass: AccidenthServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
