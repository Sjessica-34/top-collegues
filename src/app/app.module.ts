import { ViewCollegueComponent } from './view-collegue/view-collegue.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { ScorePipe } from './pipes/score.pipe';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { ScColorDirective } from './directives/sc-color.directive';
import {NouveauCollegueReactiveFormComponent} from './nouveauCollegueReactiveForm/nouveauCollegueReactiveForm.component';
import { NouveauCollegueTemplateFormComponent } from './nouveauCollegueTemplateForm/nouveauCollegueTemplateForm.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NomPrenomValidatorDirective } from './validator/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './validator/pseudo-validator.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ScorePipe,
    ListeColleguesComponent,
    AccueilComponent,
    ScColorDirective,
    HistoriqueVotesComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    PseudoValidatorDirective,
    NouveauCollegueReactiveFormComponent,
    ViewCollegueComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


