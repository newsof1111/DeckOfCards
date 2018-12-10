import { NgModule } from '@angular/core';
import {GameComponent} from './game.component';
import {SharedModule} from '../../shared/shared.module';
import { GameRoutingModule} from './game.routing';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    GameRoutingModule,
    TranslateModule.forChild({}),
    SharedModule
  ],
  exports: [GameComponent]

})
export class GameModule { }
