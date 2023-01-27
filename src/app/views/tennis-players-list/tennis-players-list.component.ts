import { Component } from '@angular/core';
import { TennisPlayer } from 'src/app/model/tennis-player';

@Component({
  selector: 'app-tennis-players-list',
  templateUrl: './tennis-players-list.component.html',
  styleUrls: ['./tennis-players-list.component.scss']
})
export class TennisPlayersListComponent {
  players : TennisPlayer[]=[
     { name: "Sampras", firstName: "Pete"},
     { name: "Forget", firstName: "Guy" },
     { name: "Courier",firstName: "Jim"}
    ]

    selection: TennisPlayer | null = null;

    playerClick(player: TennisPlayer){
      this.selection = player; 
    }
}
