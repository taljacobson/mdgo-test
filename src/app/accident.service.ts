import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccidentService {
  private mockUrl = 'http://18.221.217.0:5155/Test';
  private _accidents = new BehaviorSubject<Accident[]>([]);
  constructor(private http: HttpClient) {}

  /**
   * get all accidents
   */
  get accidents() {
    return this._accidents;
  }

  /**
   * get all treated accidents
   */
  get treated() {
    return this.accidents.pipe(map(accidents => accidents.filter(({ isTreated }) => isTreated)));
  }
  /**
   *  get all untreated accidents
   */
  get unTreated() {
    return this.accidents.pipe(map(accidents => accidents.filter(({ isTreated }) => !isTreated)));
  }

  /**
   * get a single accident
   * @param mda mda id of accident event
   */
  getSingle(mda: string) {
    return this.accidents.pipe(map(accidents => accidents.find(({ MDA }) => mda === MDA)));
  }

  /**
   * initialize data from mock Api
   */
  public async initAcidents() {
    try {
      const data = await this.http
        .get<RootObject>(this.mockUrl)
        .pipe(
          first(),
          map(({ Data }) => Data),
          map(accidents =>
            accidents.map(accident => ({
              ...accident,
              EventTime: new Date(accident.EventTime).toLocaleString(),
            })),
          ),
        )
        .toPromise();
      this._accidents.next(data);
    } catch (error) {
      // this.accidents
    }
  }
}

interface RootObject {
  Data: Accident[];
}

export interface Accident {
  EventTime: string;
  mechanism: string;
  kinematic: string;
  isTreated: boolean;
  gps: Gps;
  MDA: string;
  injuries: Injury[];
}

interface Injury {
  severity: string;
  description: string;
  location: string;
}

interface Gps {
  latitude: number;
  longitude: number;
}
