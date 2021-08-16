export interface Collegue {
  pseudo: string;
  score: number;
  nom: string;
  prenom: string;
  photo: string;

}

export enum Avis {
  AIMER,
  DETESTER
}

export interface Vote {
  pseudo: string;
  avis: Avis;

}

export interface Votes {
  collegue: Collegue;
  avis: Avis;
  score: number;
}
