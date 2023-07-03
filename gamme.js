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

// Génération des constantes pour chaque degré de la gamme majeure et mineure
const gammesMajeures = {};
const gammesMineures = {};

for (let i = 0; i < gammeBase.length; i++) {
  const note = gammeBase[i];
  const gammeMajeure = genererGammeMajeure(note);
  const gammeMineure = genererGammeMineure(note);
  
  gammesMajeures[note] = gammeMajeure;
  gammesMineures[note] = gammeMineure;
}

// Affichage des gammes majeures
for (const note in gammesMajeures) {
  console.log(`Gamme de ${note} Majeure:`, gammesMajeures[note]);
}

// Affichage des gammes mineures
for (const note in gammesMineures) {
  console.log(`Gamme de ${note} Mineure:`, gammesMineures[note]);
}

