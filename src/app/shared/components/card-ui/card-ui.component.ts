import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../models/card.model';

@Component({
  selector: 'app-card-ui',
  templateUrl: './card-ui.component.html',
  styleUrls: ['./card-ui.component.css']
})
export class CardUiComponent {
   @Input() public Card: Card ;
  @Input() public BackFace: Boolean = false;
  @Input() public BackFacePicture: string = 'assets/imgs/cards/blue_back.png';
  @Input() public NullPicture: string = 'assets/imgs/cards/red_back.png';

  constructor() { }


}
