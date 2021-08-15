import {Component, Input, OnInit} from '@angular/core';
import {Avis, Collegue} from "../models";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  @Input() collegue?: Collegue;

  constructor(private service:DataService) { }

  ngOnInit(): void {
  }

  incrementScore(avis: Avis) {
    if(this.collegue) {
      if (avis === Avis.AIMER) {
        this.collegue.score += 100;
      } else if (avis === Avis.DETESTER) {
        this.collegue.score -= 100;
      }
    }
  }


  get desactiverJaime(): boolean {
    return this.collegue != undefined && this.collegue.score >= 1000;
  }

  get desactiverJeDeteste() {
    return this.collegue != undefined && this.collegue.score <= -1000;
  }
}
