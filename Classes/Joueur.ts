import Gobelet from "./Gobelet";

export default class Joueur {
  public _nom: string;
  public _score: number;
  public _nbManchesGagnees: number;

  constructor(nom: string) {
    this._nom = nom;
    this._score = 0;
    this._nbManchesGagnees = 0;
  }

  /**
   * Méthode qui simule un lancer de dés
   * @param gobelet Un gobelet
   * @param nbDes Le nombre de dés dans le gobelet
   * @returns La somme des dés
   */
  public jouer(gobelet: Gobelet, nbDes: number): number {
    this._score = gobelet.lancer(nbDes);
    return this._score;
  }

  /**
   * Méthode qui affiche le score avec le nom du jouer
   * @returns Un joli message
   */
  public afficherScore(): void {
    console.log(`Iel a marqué ${this._score} points ! \n`);
  }
}
