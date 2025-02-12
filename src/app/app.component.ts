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

  person = {
    name: "Inge",
    age:: 44,
  }

    constructor(){
      this.person.name = "Inge";
    }
}