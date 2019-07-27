import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
    
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ name | titlecase }}</h2>
    <h2>{{ name | slice:3:5 }}</h2>
    <h2> {{ person | json}} </h2>

    <h2>{{ 5.678 | number:'1.2-3'}}</h2>
    <h2>{{ 5.678 | number:'3.4-5'}}</h2>
    <h2>{{ 5.678 | number:'3.1-2'}}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'EUR':'code' }}</h2>

    <h2> {{ date }}</h2>
    <h2> {{ date | date: 'short' }}</h2>
    <h2> {{ date | date: 'shortDate' }}</h2>
    <h2> {{ date | date: 'shortTime' }}</h2> 

    <h2> {{"Hello "+name}} </h2>
    <h2 *ngIf="displayName; else elseBlock">
    Codevolution
    </h2>

    <ng-template #elseBlock>
    <h2>
      Hidden Name
    </h2>
    </ng-template> 

    <div *ngIf="displayName; then thenBlock else elseBlock1"></div>
    <ng-template #thenBlock>
    <h1>
      thenBlock
    </h1>
    </ng-template>
    <ng-template #elseBlock1>
    <h1>
      elseBlock
    </h1>
    </ng-template>

    <div [ngSwitch] = "color">
        <div *ngSwitchCase="'red'">Red Color</div>
        <div *ngSwitchCase="'blue'">Red Color</div>
        <div *ngSwitchCase="'green'">Red Color</div>
        <div *ngSwitchDefault>Pick again </div>
    </div>
    <!--<div *ngFor="let color of colors;index as i">
    <div *ngFor="let color of colors;first as f">
    <div *ngFor="let color of colors;last as l">
    <div *ngFor="let color of colors;odd as o">-->
    <div *ngFor="let color of colors;even as e">
       <h2>{{e}} {{color}}</h2>
    </div>
    
    <button (click)="fireEvent()">Send Event </button> 
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  public color="orange";
  public colors = ["red","blue","green","yellow"];
  displayName=false;
  public person = {
    "firstName" : "jdhjk",
    "lastName"  : "kdssdj"
  }

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }
  public fireEvent()
  {
    this.childEvent.emit('Hello from fireEvent');
  }

}
