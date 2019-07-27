import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
     <h2> {{name.length}} </h2>
     <h2> {{name.toUpperCase()}} </h2>
     <h2> {{greetUser()}} </h2>
     <h2> {{siteUrl}} </h2>

     <h2 class="text-success">
     Welcome {{name}} <!--{{}} Interpolation-->
     </h2>
     <h2 [class]="successClass">
     Welcome {{name}}
     </h2>
     <h2 [class.text-danger]="hasError">
     Welcome {{name}}
     </h2>
     
     <input [id] ="myId" type =text value ="Vishwas"> <!-- [] Property Binding-->
     <input [disabled] = "isDisabled" type = text value = "Vishwas">



     <h2 [ngClass]="messageClasses">Code Evolution</h2> <!-- Class Binding -->

     <h2 [style.color] = "'blue'"> STYLE </h2>
     <h2 [style.color] = "hasError ? 'red' : 'green'"> Style Binding </h2>  <!-- Instyle binding -->
     <h2 [style.color] = "highlightColor"> Style Binding 2 </h2>
     <h2 [ngStyle] = "titleStyles"> Style </h2>

     <button (click)=onClick($event)>Greet </button>
     <button (click)="greeting='Cool Angular'">Greet</button>
     {{greeting}}
     <input #myId type =text>
     <button (click)="logMessage(myId.value)">Log</button> 
     
     <input type="text" [(ngModel)]="TwoWayBinding">
     {{TwoWayBinding}}
  `,
  styles: [`
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style : italic;
      }
  `]
})
export class TestComponent implements OnInit {

  public name = "Sugan";
  public siteUrl = window.location.href;
  public id ="myId";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "Welcome";
  public TwoWayBinding="";

  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  constructor() { }
  
  ngOnInit() {
  }
  greetUser()
  {
    return "Hello "+this.name;
  }
  
  public titleStyles = 
  {
    color: "blue",
    fontStyle: "italic"
  }
  public onClick(event)
  {
    this.greeting = event.type;
  }
  public logMessage(value)
  {
     console.log(value);
  }
}
