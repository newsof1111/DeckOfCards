import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import {TranslateModule} from '@ngx-translate/core';
import {GameRoutingModule} from './game.routing';
import {SharedModule} from '../../shared/shared.module';
import {BrowserModule, By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Card} from '../../shared/models/card.model';
import {CardUiComponent} from '../../shared/components/card-ui/card-ui.component';
import {CardsUiComponent} from '../../shared/components/cards-ui/cards-ui.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [
        GameRoutingModule,
        TranslateModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit function generate cards  ', () => {
    component.ngOnInit();
    expect(component.Cards.length).toBeGreaterThan(0);
  });
  it('should ngOnInit function call  generateCards function ', () => {
    const spy = spyOn(component, 'generateCards');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });


  it('should Schifle function call  mixCards function ', () => {
    const spy = spyOn(component, 'mixCards');
    component.Shuffle();
    expect(spy).toHaveBeenCalled();
  });


  it('should Schifle function call  SchifleAnimation function of  CardsUi', () => {
    const spy = spyOn(component.CardsUi, 'ShuffleAnimation');
    component.Shuffle();
    expect(spy).toHaveBeenCalled();
  });

  it('should GetCard function change the value of SelectedCard attribute', () => {
    component.SelectedCard = null;
    component.GetCard();
    expect(component.SelectedCard).not.toBeNull();
  });


  it('should GetCard function update the value of SelectedCard attribute with the value returned by GetCard function of CardsUi ', () => {
    const card: Card = new Card('fakeSuit', 'fakeRank', 'assets/imgs/cards/noCard.png');
    spyOn(component.CardsUi, 'GetCard').and.returnValue(card);
    component.SelectedCard = null;
    component.GetCard();
    expect(component.SelectedCard).toBe(card);
  });

  it('should Reset function change the value of SelectedCard attribute to null ', () => {
    component.SelectedCard = new Card('fakeSuit', 'fakeRank', 'assets/imgs/cards/noCard.png');
    component.Reset();
    expect(component.SelectedCard).toBeNull();
  });


  it('should Reset function generate new cards', () => {
    const spy = spyOn(component, 'generateCards');
    component.Reset();
    expect(spy).toHaveBeenCalled();
  });


  it('should generateCards function generate 52 cards', () => {
    const  Cards: Card[] = component.generateCards();
    expect(Cards.length).toBe(52);
  });
  it('should mixCards function change the order of cards array', () => {
    component.Cards = [
      new Card('suit1', 'rank1', 'assets/imgs/cards/noCard.png'),
      new Card('suit2', 'rank2', 'assets/imgs/cards/noCard.png'),
      new Card('suit3', 'rank3', 'assets/imgs/cards/noCard.png'),
      new Card('suit4', 'rank4', 'assets/imgs/cards/noCard.png'),
      new Card('suit5', 'rank5', 'assets/imgs/cards/noCard.png')
    ];
    component.mixCards();
    expect(
      component.Cards[0].Suit !== 'suit1' ||
      component.Cards[1].Suit !== 'suit2' ||
      component.Cards[2].Suit !== 'suit3' ||
      component.Cards[3].Suit !== 'suit4' ||
      component.Cards[4].Suit !== 'suit5'
    ).toBeTruthy();
  });

  it('should mixCards function call swap function', () => {
    const spy = spyOn(component, 'swap');
    component.mixCards();
    expect(spy).toHaveBeenCalled();
  });


  it('should swap function call switch 2 element of cards array', () => {
    component.Cards = [
      new Card('suit1', 'rank1', 'assets/imgs/cards/noCard.png'),
      new Card('suit2', 'rank2', 'assets/imgs/cards/noCard.png'),
      new Card('suit3', 'rank3', 'assets/imgs/cards/noCard.png'),
      new Card('suit4', 'rank4', 'assets/imgs/cards/noCard.png'),
      new Card('suit5', 'rank5', 'assets/imgs/cards/noCard.png'),
    ];
    component.swap(0, 1);
    expect(
      component.Cards[0].Suit === 'suit2' &&
      component.Cards[1].Suit === 'suit1'
    ).toBeTruthy();
  });

  it(`should have a CardUi  `, async(() => {
    const debugElements = fixture.debugElement.query(By.directive(CardUiComponent));
    expect(debugElements).not.toBeNull();
  }));

  it(`should have a CardsUi  `, async(() => {
    const debugElements = fixture.debugElement.query(By.directive(CardsUiComponent));
    expect(debugElements).not.toBeNull();
  }));
  it(`should call Shuffle function when clicking on SchifleButton   `, async(() => {
    const spy = spyOn(component, 'Shuffle');
    const ShuffleButton = fixture.debugElement.query(By.css('#ShuffleButton'));
    ShuffleButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  }));


  it(`should call GetCard function when clicking on GetCardButton   `, async(() => {
    const spy = spyOn(component, 'GetCard');
    const GetCardButton = fixture.debugElement.query(By.css('#GetCardButton'));
    GetCardButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  }));


  it(`should call GetCard function when clicking on ResetButton   `, async(() => {
    const spy = spyOn(component, 'Reset');
    const ResetButton = fixture.debugElement.query(By.css('#ResetButton'));
    ResetButton.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalled();
  }));





});
