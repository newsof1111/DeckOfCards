import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';


const appRoutes: Routes = [
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'game', loadChildren: './pages/game/game.module#GameModule' },
  { path: '**', redirectTo: 'Welcome'},

];

@NgModule({
  imports: [    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
