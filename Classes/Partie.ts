import De from "./De";
import Gobelet from "./Gobelet";
import Joueur from "./Joueur";

export default class Partie {
  public _nbTours: number;
  public _nbDes: number;
  public _joueurs: Joueur[];
  public _gobelet: Gobelet;

  //NBDES = 0
  constructor(gobelet: Gobelet) {
    this._nbTours = 0;
    this._nbDes = 0;
    this._gobelet = gobelet;
    this._joueurs = [];
  }

  /**
   * Méthode qui initialise une partie
   * @param nbTours Nombre de tours
   * @param nbDes Nombre de dés
   * @param joueurs Liste des joueurs
   */
  initialiserPartie(nbTours: number, nbDes: number, ...joueurs: Joueur[]) {
    this._nbTours = nbTours;
    this._nbDes = nbDes;
    this._joueurs = joueurs;
  }

  afficherManche(nbManches: number) {
    console.log(`La partie est lancée ! \n`);
    console.log("-".repeat(12));
    console.log(`Manche n° ${nbManches}`);
    console.log("-".repeat(12));
  }

  lancerPartie() {
    // Les joueurs lancent leur(s) dé(s)
    this._joueurs.forEach((joueur) => {
      console.log(`${joueur._nom} lance ses dés`);
      joueur.jouer(this._gobelet, this._nbDes);
      joueur.afficherScore();
    });
  }

  afficherVainqueurManche() {
    // Récupère la plus grande valeur
    let plusGrandScore = this._joueurs[0]._score;
    for (let index = 0; index < this._joueurs.length; index++) {
      if (this._joueurs[index]._score > plusGrandScore) {
        plusGrandScore = this._joueurs[index]._score;
      }
    }
    console.log(plusGrandScore);
  }

  afficherGrandVainqueur() {}
}
