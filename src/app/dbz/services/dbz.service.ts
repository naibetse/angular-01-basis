import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _charactersList:Character[] = [
    {
      name: "Goku",
      power: 18000
    },
    {
      name: "Vegeta",
      power: 7800
    }
  ]


  get characters():Character[] {
    // Using spread syntax to break the JS Object reference issue.
    return [...this._charactersList];
  }

  // constructor() {}

  addCharacter( character: Character ):void {
    this._charactersList.push( character );
  }
}
