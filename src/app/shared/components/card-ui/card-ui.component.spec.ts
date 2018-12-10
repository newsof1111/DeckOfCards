import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUiComponent } from './card-ui.component';
import {By} from '@angular/platform-browser';
import {Card} from '../../models/card.model';

describe('CardUiComponent', () => {
  let component: CardUiComponent;
  let fixture: ComponentFixture<CardUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display an img with src equal to nullPicture attribute when card is null`, () => {
    component.Card = null;
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.src).toContain(component.NullPicture);
  });


  it(`should display an img with src equal to card.picture attribute when card is not null`, () => {
    component.Card =  new Card('suit', 'rank', 'assets/imgs/cards/noCard.png');
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.src).toContain('assets/imgs/cards/noCard.png');
  });

  it(`should display an img with src equal to card.BackFacePicture attribute when BackFace attribute is true`, () => {

    component.Card =  new Card('suit', 'rank', 'assets/imgs/cards/noCard.png');
    component.BackFace = true;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.src).toContain(component.BackFacePicture);
  });


});
