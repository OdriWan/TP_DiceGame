import De from "./De";

export default class Gobelet {
  public _valeur: number;

  constructor() {
    this._valeur = 0;
  }

  /**
   * Méthode qui permet de faire un lancer de plusieurs dés contenus dans un gobelet
   * @param nbDes Le nombre de dés contenus dans un gobelet
   * @returns La somme des lancers de dés
   */
  public lancer(nbDes: number): number {
    const de: De = new De();
    let somme: number = 0;
    for (let index = 0; index < nbDes; index++) {
      somme += de.lancer();
    }
    this._valeur = somme;
    return this._valeur;
  }

  /**
   * Affiche le score
   */
  public afficherScore(): void {
    console.log(`Le score est de ${this._valeur}`);
  }
}
