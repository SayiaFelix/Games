import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GamedetailComponent } from './gamedetail/gamedetail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GameFormComponent } from './game-form/game-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GamedetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
