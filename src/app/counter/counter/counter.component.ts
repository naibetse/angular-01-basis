import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <p>
    The base number is: {{value}}
    </p>
    <div>
      <button  (click)="counterAction(value)">+{{value}}</button>
      <span>{{count}}</span>
      <button (click)="counterAction(-value)">-{{value}}</button>
    </div>
  `
})
export class CounterComponent {

  public title:string = 'App counter';
  public count:number = 0;
  public value:number = 5;

  counterAction(value:number):number {
    console.log(this.count, ' ', value)
    return (value < 0 && this.count === 0) ? 0 : this.count += value;
  }

}
