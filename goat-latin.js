const toGoatLatin = (S) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const ma = 'ma';

  return S.split(' ')
    .map((word, i) => {
      const a = 'a'.repeat(i + 1);
      const first = word[0];
      
      if (vowels.includes(first.toLowerCase())) {
        return word + ma + a;
      }

      return word.slice(1) + first + ma + a;
    })
    .join(' ');
};

console.log(toGoatLatin('I speak Goat Latin'));
console.log(
  toGoatLatin('Each word consists of lowercase and uppercase letters only')
);
