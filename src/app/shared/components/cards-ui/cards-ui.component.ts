import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card.model';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cards-ui',
  templateUrl: './cards-ui.component.html',
  styleUrls: ['./cards-ui.component.css'],
  animations: [
    trigger('NotificationAnimation', [
      state('LeftRight', style({
        transform: 'translate3d(0, 0, 0)'
      })), state('RightLeft', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('* => LeftRight', animate('500ms ease-out', keyframes([
        style({transform: 'translate3d(0,0,0)', offset: 0}),
        style({transform: 'translate3d(-50%,5%,0)', offset: 0.25}),
        style({transform: 'translate3d(0,0,0)', offset: 0.5}),
        style({transform: 'translate3d(50%,5%,0)', offset: 0.75}),
        style({transform: 'translate3d(0,0,0)', offset: 1})
      ]))),
      transition('* => RightLeft', animate('500ms ease-out', keyframes([
        style({transform: 'translate3d(0,0,0)', offset: 0}),
        style({transform: 'translate3d(50%,-5%,0)', offset: 0.25}),
        style({transform: 'translate3d(0,0,0)', offset: 0.5}),
        style({transform: 'translate3d(-50%,5%,0)', offset: 0.75}),
        style({transform: 'translate3d(0,0,0)', offset: 1})
      ])))
    ])]
})
export class CardsUiComponent implements OnInit {

  @Input() public Cards: Card[] ;
  @Input() public BackFace: Boolean = false;
  @Input() public BackFacePicture: string ;
  @Input() public NullPicture: string ;
  private animation_Type1: string ;
  private animation_Type2: string ;
  private IsShuffling: Boolean = false ;

  constructor() {}

  /* let's start same Shuffling's animation JUST FOR SHOW */
  ngOnInit() {
    setTimeout(() => {
      this.ShuffleAnimation();
    }, 400 );
  }

  /* ShuffleAnimation function making same successive animations to feel like Shuffling   */
  ShuffleAnimation() {
    this.IsShuffling = true;
    this.animation_Type1 = 'RightLeft';
    setTimeout(() => {
      this.animation_Type2 = 'LeftRight';
      setTimeout(() => {
        this.animation_Type2 = 'RightLeft';
        setTimeout(() => {
          this.animation_Type2 = '';
          this.IsShuffling = false;

        }, 500 );
      }, 500 );
    }, 50 );
    setTimeout(() => {
      this.animation_Type1 = 'LeftRight';
      setTimeout(() => {
        this.animation_Type1 = '';
      }, 500 );
    }, 500 );
  }

  /* GetCard function to get the last element of cards and remove it  */
  GetCard() {
    return this.Cards.pop();

  }


}
