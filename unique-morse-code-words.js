var uniqueMorseRepresentations = function(words) {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  const transforms = [];

  words.forEach((word) => {
    const morseWordArr = [];

    for (letter of word) {
      const index = letter.charCodeAt(0) - 97;
      const morseLetter = morse[index];
      morseWordArr.push(morseLetter);
    }

    const morseWord = morseWordArr.join('');

    console.log(morseWord);

    if (!transforms.includes(morseWord)) {
      transforms.push(morseWord);
    }
  });

  return transforms.length;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
