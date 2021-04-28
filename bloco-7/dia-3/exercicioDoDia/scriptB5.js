const verify = pass => {
  if (pass.length >= 8 &&
    pass.split('').find(a => a === a.toUpperCase() && a === a.toLowerCase() && !isNaN(a))) {
      return 'Ok';
    } else {
      return 'Not Ok';
    };
};
const passwordVerifier = password => verify(password);

passwordVerifier('tal3esaT');

const assert = require('assert');

assert.deepStrictEqual(passwordVerifier('tal3esaT') , 'Ok');
