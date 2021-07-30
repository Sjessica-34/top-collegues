import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Avis} from "../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',

})

export class AvisComponent implements OnInit {


  @Input()
  avis?:Avis

  constructor() {

  }

  ngOnInit(): void {
  }

  Avis(avis:string):void {
    if (avis == "aimerColl") {
      this.avis = Avis.AIMER
    } else if (avis == "detesterColl") {
      this.avis = Avis.DETESTER
    }
  }
}
