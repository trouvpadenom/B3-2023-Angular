import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TennisPlayerComponent } from './views/tennis-player/tennis-player.component';
import { FootballTeamComponent } from './views/football-team/football-team.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    FootballTeamComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
