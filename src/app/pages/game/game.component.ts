import {Component, OnInit, ViewChild} from '@angular/core';
import {Card} from '../../shared/models/card.model';
import {CardsUiComponent} from '../../shared/components/cards-ui/cards-ui.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent  implements OnInit {

  public BackFacePicture: string = 'assets/imgs/cards/blue_back.png';
  public NullPicture: string = 'assets/imgs/cards/noCard.png';
  public Cards: Card[] = [];
  public SelectedCard: Card = null;

  /* let's get an instance of CardsUiComponent from the view reference  */
  @ViewChild(CardsUiComponent) CardsUi: CardsUiComponent;

  constructor() {}

  /* let's generate cards on initialization */
  ngOnInit() {
    this.Cards = this.generateCards();
  }
  /* Shuffle Cards function */
  Shuffle() {
    this.mixCards();
    /* Calling ShuffleAnimation function from CardsUiComponent just for making a nice animation */
    this.CardsUi.ShuffleAnimation();
  }
  /* GetCard function called to get the last element of cards array then remove it */
  GetCard() {
    this.SelectedCard = this.CardsUi.GetCard();
  }
  /* Reset function called to recreate a new card-list to start again */
  Reset() {
    this.Cards = null;
    this.SelectedCard = null;
    this.Cards = this.generateCards();
  }

  /* generateCards function called to create a new cardList instead of manual-creation */
  generateCards() {
    const suits = [ 'heart', 'diamond', 'spade', 'club' ];
    const ranks = [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ];
    let newCardArray: Card[];
    newCardArray = [];
    ranks.forEach(function (rank) {
      suits.forEach(function (suit) {
        /* adding the new card to the list  */
        /* the picture is already existing with a name created based on suits and ranks */
        newCardArray.push(new Card(suit, rank, 'assets/imgs/cards/' + rank + suit + '.png'));
      });
    });
    return newCardArray;
  }

  /* mixCards function called to change places inside the cardList for Shuffle */
  mixCards() {
    const cardLength = this.Cards.length - 1;
    /* let's store the context to make it accessible from the next nested function */
    const scope = this;
    this.Cards.forEach(function (card, indexFrom) {
      /* using random function to generate a float from [0,1[  */
      /* duplicating it to (cardLength + 1) to get a float from [0,cardLength + 1[  */
      /* using Math.floor function will return the largest integer less than or equal . the result will be [0,cardLength]  */
      const indexTo = Math.floor(Math.random() * (cardLength +  1));
      scope.swap(indexFrom, indexTo);
    });
  }

  /* swap function called to switch places inside the Cards */
  swap( indexFrom: number, indexTo: number) {
    const temp = this.Cards[indexFrom];
    this.Cards[indexFrom] = this.Cards[indexTo];
    this.Cards[indexTo] = temp;
  }


}
