import {Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {NouveauCollegueReactiveFormComponent} from "./nouveauCollegueReactiveForm/nouveauCollegueReactiveForm.component";
import {NouveauCollegueTemplateFormComponent} from "./nouveauCollegueTemplateForm/nouveauCollegueTemplateForm.component";
import {ViewCollegueComponent} from "./view-collegue/view-collegue.component";

export const ROUTES: Routes = [
  { path: 'collegues', component: AccueilComponent },
  { path: 'reactive-from', component: NouveauCollegueReactiveFormComponent },
  { path: 'template-form', component: NouveauCollegueTemplateFormComponent },
  { path: 'collegues/:pseudo', component: ViewCollegueComponent },
  { path: '', pathMatch: 'full', redirectTo: '/collegues' },
]
