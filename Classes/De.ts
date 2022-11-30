export default class De {
  public _valeur: number;

  constructor() {
    this._valeur = 0;
  }

  /**
   * Méthode qui permet de faire un lancer de dé
   * @returns Une valeur entre 1 et 6
   */
  public lancer(): number {
    this._valeur = Math.floor(Math.random() * 6) + 1;
    return this._valeur;
  }
}
