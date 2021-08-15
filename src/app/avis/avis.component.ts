import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Avis} from "../models";

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',

})

export class AvisComponent {

  @Output() avis = new EventEmitter<Avis>();

  @Input() desactiveJaime = false;

  @Input() desactiveJeDeteste = false;

  constructor() {

  }

    aimer() {
    this.avis.emit(Avis.AIMER);
  }

  detester() {
    this.avis.emit(Avis.DETESTER);
  }
}
