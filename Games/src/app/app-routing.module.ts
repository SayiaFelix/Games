import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: 'games', component: GameComponent},
  { path: 'about', component: AboutComponent},
  { path: 'quotes', component: QuotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [GameComponent,AboutComponent]