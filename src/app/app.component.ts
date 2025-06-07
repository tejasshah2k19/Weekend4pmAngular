import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { CalcComponent } from "./calc/calc.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weekend4pm';
}
