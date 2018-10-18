import { AccidentService } from './accident.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { UserInfoComponent } from './user-info/user-info.component';

describe('AppComponent', () => {
  const accidentServiceSpy = jasmine.createSpyObj('AccidenthService', ['initAcidents']);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HeaderBarComponent,
        SideMenuComponent,
        UserInfoComponent,
        AppComponent
      ],
      providers: [
        {provide: AccidentService, useValue: accidentServiceSpy}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize call to accident', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const cmp = fixture.componentInstance;
    cmp.ngOnInit();
    expect(accidentServiceSpy.initAcidents).toHaveBeenCalled();
  });

  it(`should have as title 'mdgo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mdgo-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header-bar .brand').textContent).toContain('MDGO');
  });
});
