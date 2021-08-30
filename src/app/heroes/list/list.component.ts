import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listHeroes:string[] = ['Ironman', 'Spiderman', 'Hulk', 'Tor', "Captain America"];
  listHeroesRemoved:string[] = [];

  deleteHeroreItem(idx:number) {
    this.listHeroesRemoved.push( this.listHeroes[idx] );
    this.listHeroes.splice(idx, 1);
  }
}
