import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {CommonModule} from '@angular/common';
import {Router, RouterLinkWithHref} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {WelcomeComponent} from '../../pages/welcome/welcome.component';
import {GameComponent} from '../../pages/game/game.component';
import {DropdownDirective} from '../../shared/directives/dropdown.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let translateService: TranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent , WelcomeComponent , GameComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'Welcome', component: WelcomeComponent },
          { path: 'game', component: GameComponent }]),
        SharedModule,
        TranslateModule.forRoot()
      ],
      providers: [ TranslateService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translateService = TestBed.get(TranslateService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to game page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex((de) => de.properties['href'] === '/game');
    expect(index).toBeGreaterThan(-1);
  });
  it('should have a link to welcome page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    const index = debugElements.findIndex((de) => de.properties['href'] === '/Welcome');
    expect(index).toBeGreaterThan(-1);
  });

  it('should include the dropDown directive', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(DropdownDirective));
    expect(debugElements).not.toBeNull();
  });

  it('should add active class in Welcome link when the location is /Welcome ', fakeAsync(() => {
    router.navigate(['/Welcome']);
    tick();
    fixture.detectChanges();
    const WelcomeLink: HTMLElement = fixture.debugElement.query(By.css('#WelcomeLink')).nativeElement;
    expect(WelcomeLink.classList).toContain('active');

  }));

  it('should add active class in game link when the location is /game ', fakeAsync(() => {
    router.navigate(['/game']);
    tick();
    fixture.detectChanges();
    const GameLink: HTMLElement = fixture.debugElement.query(By.css('#GameLink')).nativeElement;
    expect(GameLink.classList).toContain('active');

  }));


  it('should use french when the default language of browser is french', () => {

    spyOn(translateService, 'getBrowserLang').and.returnValue('fr');
    component.ngOnInit();
    expect(translateService.currentLang).toBe('fr');
    expect(component.currentLanguage).toBe('fr');

  });


  it('should use english  when the default language of browser is english', () => {

    spyOn(translateService, 'getBrowserLang').and.returnValue('en');
    component.ngOnInit();
    expect(translateService.currentLang).toBe('en');
    expect(component.currentLanguage).toBe('en');

  });
  it('should use english  when the default language of browser is other then french and english', () => {

    spyOn(translateService, 'getBrowserLang').and.returnValue('it');
    component.ngOnInit();
    expect(translateService.currentLang).toBe('en');
    expect(component.currentLanguage).toBe('en');

  });
  it('should use french  when calling ChangeLang function with french as parameter', () => {

    component.ChangeLang('fr');
    expect(translateService.currentLang).toBe('fr');
    expect(component.currentLanguage).toBe('fr');

  });
  it('should use english  when calling ChangeLang function with english as parameter', () => {

    component.ChangeLang('en');
    expect(translateService.currentLang).toBe('en');
    expect(component.currentLanguage).toBe('en');

  });
  it('should have english as default Language  ', () => {
    expect(translateService.getBrowserLang()).toBe('en');
  });

});
