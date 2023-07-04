const gammeBase = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Fonction générer les gammes majeures
function genererGammesMajeures(gammeBase, tonique) {
    const toniqueIndex = gammeBase.indexOf(tonique);
  
    if (toniqueIndex === -1) {
      console.log("La tonique n'est pas présente dans la gamme de base.");
      return [];
    }
  
    const gammesMajeures = [];
    const indiceDeTons = [0, 2, 4, 5, 7, 9, 11];
  
    for (let i = 0; i < gammeBase.length; i++) {
      const gammeMajeure = [];
      for (let j = 0; j < gammeBase.length; j++) {
        const noteIndex = (i + toniqueIndex + indiceDeTons[j]) % gammeBase.length;
        gammeMajeure.push(gammeBase[noteIndex]);
      }
      gammesMajeures.push(gammeMajeure);
    }
  
    return gammesMajeures;
  }
  
 
  const tonique = 'D';
  const gammeDeD = genererGammesMajeures(gammeBase, tonique);
  console.log(gammeDeD);
  