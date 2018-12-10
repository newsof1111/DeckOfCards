import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]

})
export class HeaderModule { }
