import {RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import {GameComponent} from './game.component';

const gameRoute: Routes = [
//  { path: ':lang', component: GameComponent},
  { path: '', component: GameComponent},
  { path: '**', redirectTo: '/Welcome'},

];


@NgModule({
  imports: [
    RouterModule.forChild(gameRoute)
  ],
  exports: [RouterModule]
})
export class GameRoutingModule {}
