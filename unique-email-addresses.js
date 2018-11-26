const numUniqueEmails = (emails) => {
  const set = new Set();
  for (email of emails) {
    const i = email.indexOf('@');
    let local = email.substring(0, i);
    const dom = email.substring(i)
    if (local.includes('+')) {
      local = local.substring(0, local.indexOf('+'))
    }
    local = local.replace(/\./g, '');
    set.add(local + dom);
  }  
  // for (let j = 0; j < emails.length; j++) {
  //   const parts = emails[j].split('@');
  //   const newPart = [];
  //   for (let i = 0; i < parts[0].length; i++) {
  //     if (parts[0][i] === '+') break;
  //     if (parts[0][i] !== '.') newPart.push(parts[0][i]);
  //   }
  //
  //   set.add([newPart.join(''), parts[1]].join('@'));
  // }

  return set.size;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
);
