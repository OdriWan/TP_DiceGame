import De from "./Classes/De";
import Gobelet from "./Classes/Gobelet";
import Joueur from "./Classes/Joueur";
import Partie from "./Classes/Partie";

/*const de: De = new De();
console.log(de.lancer());*/

const superGobelet: Gobelet = new Gobelet();

const audrey: Joueur = new Joueur("Audrey");
const eddy: Joueur = new Joueur("Eddy");
const pierre: Joueur = new Joueur("Pierre");

const superPartie: Partie = new Partie(superGobelet);
superPartie.initialiserPartie(1, 1, audrey, eddy, pierre);
superPartie.lancerPartie();
superPartie.afficherVainqueurManche();
