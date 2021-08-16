import { CollegueComponent } from './../collegue/collegue.component';
import { DataService } from './../services/data.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-reactive-form',
  templateUrl: './nouveauCollegueReactiveForm.component.html',
  styleUrls: ['./nouveauCollegueReactiveForm.component.css']
})
export class NouveauCollegueReactiveFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  collegue?: CollegueComponent

  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.min(2)]],
      nom: ['', [Validators.required, Validators.min(2)]],
      prenom: ['', [Validators.required, Validators.min(2)]],
      photo: ['', [Validators.required, Validators.min(2)]],
    })
  }

  get f() {
    return this.form.controls
  }

  get formAll() {
    return this.form
  }

  createCollegue() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.DataService.createCollegue(this.form.value).subscribe(collegue => {
        this.router.navigate([''])
      }
    )
  }

}
