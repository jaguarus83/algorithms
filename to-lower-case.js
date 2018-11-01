var toLowerCase = function(str) {
  return str
    .split('')
    .map((s) => {
      const code = s.charCodeAt(0);
      return code >= 65 && code <= 90
        ? String.fromCharCode(code + 32)
        : String.fromCharCode(code);
    })
    .join('');
};

console.log(toLowerCase('PiTAs'));
