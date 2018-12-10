import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]

})
export class WelcomeModule { }
