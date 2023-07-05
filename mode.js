const gammeBase = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function genererGamme(tonique, mode = 'majeur', modeGamme = null) {
  const indexTonique = gammeBase.indexOf(tonique);

  // Ajouter cette ligne pour ajuster la tonique de base
  const gammeBaseAjustee = gammeBase.slice(indexTonique).concat(gammeBase.slice(0, indexTonique));

  let gamme;

  if (mode === 'mineur') {
    const gammeMineure = gammeBaseAjustee.slice(0, 3).concat(gammeBaseAjustee.slice(5));
    gamme = gammeMineure;
  } else if (mode === 'majeur') {
    gamme = gammeBaseAjustee;
  } else {
    throw new Error('Mode non valide. Veuillez choisir "majeur" ou "mineur".');
  }

  if (modeGamme) {
    const modes = ['Ionien', 'Dorien', 'Phrygien', 'Lydien', 'Mixolydien', 'Éolien', 'Locrien'];
    const indexModeGamme = modes.indexOf(modeGamme);

    if (indexModeGamme === -1) {
      throw new Error('Mode de gamme non valide. Veuillez choisir parmi les modes suivants : Ionien, Dorien, Phrygien, Lydien, Mixolydien, Éolien, Locrien');
    }

    gamme = gamme.slice(indexModeGamme).concat(gamme.slice(0, indexModeGamme));

    // Ajouter cette ligne pour ajuster la gamme à une octave
    gamme.push(gamme[0]);
  }

  return gamme;
}

const tonique = 'D';
const modeGamme = 'Ionien';
const gamme = genererGamme(tonique, 'majeur', modeGamme);
console.log(gamme);
