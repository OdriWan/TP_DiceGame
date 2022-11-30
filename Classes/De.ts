export default class De {
  public _valeur: number;

  constructor() {
    this._valeur = 0;
  }

  lancer() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
