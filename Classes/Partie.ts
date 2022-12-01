import De from "./De";
import Joueur from "./Joueur";

export default class Partie {
  public _nbTours: number;

  constructor() {
    this._nbTours = 0;
  }

  initialiserPartie(
    nbTours: number,
    de: De,
    nbDes: number,
    ...joueurs: Joueur[]
  ) {}

  lancerPartie() {}

  afficherGagnant() {}
}
