const gammeBase = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

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

for (const note of gammeBase) {
  const gammeMineure = genererGammeMineure(note);
  console.log(`Gamme de ${note} Mineur:`, gammeMineure);
}
