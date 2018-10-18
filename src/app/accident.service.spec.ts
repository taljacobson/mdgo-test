import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { AccidentService } from './accident.service';


describe('AccidenthService', () => {
  let injector: TestBed;
  let service: AccidentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    injector = getTestBed();
    service = injector.get(AccidentService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
