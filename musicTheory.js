const gammeBase = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function genererGammeMajeure(noteDeDepart) {
  const gammeMajeure = [];
  let currentIndex = gammeBase.indexOf(noteDeDepart);

  // Ajouter la note de départ à la gamme majeure
  gammeMajeure.push(gammeBase[currentIndex]);

  // Ajouter les autres notes de la gamme majeure en utilisant les intervalles
  const intervalles = [2, 2, 1, 2, 2, 2, 1];
  for (let i = 0; i < intervalles.length; i++) {
    currentIndex += intervalles[i];
    currentIndex %= gammeBase.length;
    gammeMajeure.push(gammeBase[currentIndex]);
  }

  return gammeMajeure;
}

function genererGammeMineure(noteDeDepart) {
  const gammeMineure = [];
  let currentIndex = gammeBase.indexOf(noteDeDepart);

  // Ajouter la note de départ à la gamme mineure
  gammeMineure.push(gammeBase[currentIndex]);

  // Ajouter les autres notes de la gamme mineure en utilisant les intervalles
  const intervalles = [2, 1, 2, 2, 1, 2, 2];
  for (let i = 0; i < intervalles.length; i++) {
    currentIndex += intervalles[i];
    currentIndex %= gammeBase.length;
    gammeMineure.push(gammeBase[currentIndex]);
  }

  return gammeMineure;
}



const gammeDoMineur = genererGammeMineure('D#');
console.log('Scale of D# Minor:', gammeDoMineur);

/* const gammeFaMineur = genererGammeMineure('F');
console.log('Gamme de FA Mineur:', gammeFaMineur);

const gammeSolMineur = genererGammeMineure('G');
console.log('Gamme de SOL Mineur:', gammeSolMineur);

const gammeDoDieseMineur = genererGammeMineure('C#');
console.log('Gamme de do# Mineur:', gammeDoDieseMineur);
 */
// Utilisation de la fonction pour générer les gammes majeures à partir des notes de départ spécifiées

const gammeDoMajeur = genererGammeMajeure('D#');
console.log('Scale of D# Major:', gammeDoMajeur);


