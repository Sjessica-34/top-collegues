export interface Collegue {
  pseudo: string;
  score: number;
  nom: string;
  prenom: string;
  photoUrl: string;
}

export enum Avis {
  AIMER,
  DETESTER
}

export interface Vote {
  pseudo: string;
  avis: Avis;

}
