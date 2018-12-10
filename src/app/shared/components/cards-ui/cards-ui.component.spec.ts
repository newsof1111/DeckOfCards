import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUiComponent } from './cards-ui.component';
import {CardUiComponent} from '../card-ui/card-ui.component';
import {Card} from '../../models/card.model';

describe('CardsUiComponent', () => {
  let component: CardsUiComponent;
  let fixture: ComponentFixture<CardsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsUiComponent , CardUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should GetCard function return the last element of cardsList then remove it ', () => {
    const card =  new Card('suit', 'rank', 'assets/imgs/cards/noCard.png');
    component.Cards = [card];
    const returnedCard = component.GetCard();
    expect(returnedCard).toBe(card);
    expect(component.Cards.length).toBe(0);
  });

});
