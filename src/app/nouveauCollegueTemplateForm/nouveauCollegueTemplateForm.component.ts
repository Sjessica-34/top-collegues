import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveauCollegueTemplateForm.component.html',
  styleUrls: ['./nouveauCollegueTemplateForm.component.css']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  collegue: Collegue = {
    pseudo: '',
    nom: '',
    prenom: '',
    photo: '',
    score: 100
  };

  constructor(
    private service: DataService,
    private Router: Router
  ) { }

  ngOnInit(): void {
  }

  createCollegue(){
    console.log(this.collegue)
    this.service.createCollegue({
      pseudo: this.collegue.pseudo,
      nom: this.collegue.nom,
      prenom: this.collegue.prenom,
      score: this.collegue.score,
      photo: this.collegue.photo
    }).subscribe(collegue => {
      this.Router.navigate([''])
    }

    )

  }

}
