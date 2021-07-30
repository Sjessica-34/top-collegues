import {Component, Input, OnInit} from '@angular/core';
import {Avis, Collegue} from "../models";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue = {
    pseudo: "Leia",
    score: 300,
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  incrementScore(avis: Avis) {
    avis == Avis.AIMER ? this.collegue.score++ : this.collegue.score--
  }
}
