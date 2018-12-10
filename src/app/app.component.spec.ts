import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderModule} from './core/header/header.module';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './core/header/header.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HeaderModule, RouterTestingModule ] ,
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have a Header  `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.query(By.directive(HeaderComponent));
    expect(debugElements).not.toBeNull();
  }));

  it(`should have a router outlet `, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElements = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElements).not.toBeNull();
  }));
});
