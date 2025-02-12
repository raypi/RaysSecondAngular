import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RaysSecondAngular';

  fruit = "";
  fruitList = ["Banana"];

    constructor(){
      let banana = this.fruitList.pop();
      if (banana != undefined){
        this.fruit = banana;
      }
    }
}