import { Component } from '@angular/core';
import { Character } from "../interfaces/dbz.interface";
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  charactersList: Character[] = [];


  newCharacter:Character = {
    name: 'Maestro Rochi',
    power: 12320
  }

  addNewCharacter( arg:Character ):void {
    // debugger;
    // this.charactersList.push(arg);
  }

  constructor( private dbzService: DbzService ) {}

}
