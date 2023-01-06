import { TennisPlayer } from './model/tennis-player';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  player: TennisPlayer = {
    name: 'Nadal',
    firstName: 'Raphael',
    rank: 3
  };

  click(){
    this.player = {
      name: 'Cilic',
      firstName: 'Marin',
      rank:3
    };
  }


  save(){
    console.log(this.player);
  }




}
