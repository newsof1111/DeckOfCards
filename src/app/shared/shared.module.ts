import { NgModule } from '@angular/core';
import { CardUiComponent } from './components/card-ui/card-ui.component';
import { CardsUiComponent } from './components/cards-ui/cards-ui.component';
import { HttpClientModule} from '@angular/common/http';
import {DropdownDirective} from './directives/dropdown.directive';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [
    CardUiComponent,
    CardsUiComponent,
    DropdownDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [CardUiComponent, CardsUiComponent , DropdownDirective],

})
export class SharedModule { }
