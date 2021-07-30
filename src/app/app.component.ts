import { Component } from '@angular/core';
import {Avis} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues';
  avisRecupere = Avis.AIMER;
  ;
}
