import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {Avis, Collegue, Vote, Votes} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  listerCollegues(): Promise<Collegue[]> {
    return fetch('https://formation-angular-collegues.herokuapp.com/collegues')
      .then(response => response.json());
  }

  donnerUnAvis(collegue: Collegue, avis: Avis): Promise<Response> {
    let vote: Vote = {
      pseudo: collegue.pseudo,
      avis,
    }
    return fetch('https://formation-angular-collegues.herokuapp.com/votes', {
      method: 'post',
      body: JSON.stringify(vote),
      headers: {'Content-Type': 'application/json'}
    })
  }
  listerVotes(): Promise<Votes[]> {
    return fetch('https://formation-angular-collegues.herokuapp.com/votes')
      .then(response => response.json());
  }

  createCollegue(collegue:Collegue): Observable<Collegue> {
    return this.http.post<Collegue>(environment.urlResourceCollegue, collegue)
  }
}
