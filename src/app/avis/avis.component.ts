import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Avis} from "../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',

})

export class AvisComponent implements OnInit {

  @Output() avis = new EventEmitter<Avis>();

  @Input() desactiveJaime = false;

  @Input() desactiveJeDeteste = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  aimerColl() {
    this.avis.emit(Avis.AIMER);
  }

  detesterColl() {
    this.avis.emit(Avis.DETESTER);
  }
}
