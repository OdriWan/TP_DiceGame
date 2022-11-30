import De from "./Classes/De";
import Gobelet from "./Classes/Gobelet";

const de: De = new De();
console.log(de.lancer());

const gobelet: Gobelet = new Gobelet();
gobelet.lancer(6);
gobelet.afficherScore();
