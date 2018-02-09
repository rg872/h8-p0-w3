function palindrome(kata) {
  // you can only write your code here!
  var kata1;
  var kata2;
  var check = true;

  if (kata.length % 2 === 0) {
    kata1 = kata.substr(0, kata.length / 2);
    kata2 = kata.substr(kata.length / 2);
  }else {
    kata1 = kata.substr(0, kata.length / 2);
    kata2 = kata.substr((kata.length / 2) + 1);
  }

  //console.log(kata1 + kata2);

  for (var i = 0; i < kata1.length; i++) {
    if (kata1[i] !== kata2[kata2.length - 1 - i]) {
      check = false;
      //console.log(kata1[i] + '' + kata2[kata2.length - i]);
    }
  }

  return check;

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
