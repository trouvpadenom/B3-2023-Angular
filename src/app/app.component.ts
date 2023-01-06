import { TennisPlayer } from './model/tennis-player';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public constructor() {
    // dans le constructeur : on initialise les valeurs du formulaire avec le modèle de données
    this.playerForm.setValue(this.player);
  }

  /**
   * Joueur en cours d'affichage et qui peut être modifié
   */
  player: TennisPlayer = {
    name: 'Nadal',
    firstName: 'Raphael'
  };
  /**
   * Formulaire contenant les champs à modifier pour un joueur de tennis
   */
  playerForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl('')
  });

  onCancel() {
    this.playerForm.setValue(this.player);
  }

  onSubmit() {
    // en cas de sauvegarde, on enregistre les modifications dans le modèle de données
    console.log(this.playerForm.value);
    this.player.name = this.playerForm.value.name!;
    this.player.firstName = this.playerForm.value.firstName!;

  }

}
