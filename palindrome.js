'use strict';

const palindromeChecker = function (sentence).replace(/\s/g, '') {
  const input = sentence.toLowerCase();
  const result = sentence.split('').reverse().join('').toLowerCase('')
.replace(/\s/g, '');

  console.log(input);
  console.log(result);
  console.log(input === result);


};

palindromeChecker('wow');
palindromeChecker('was it a car or a cat I saw');
palindromeChecker('a man, a plan, a canal, Panama!');
