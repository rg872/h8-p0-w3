function angkaPalindrome(num) {
  // you can only write your code here!
  var result = 0;
  var test = '';
  var check = false;

  if (num < 10 && num + 1 !== 10) {
    result = num + 1;
  } else if (num >= 10) {
    for (var x = num; check === false; x++) {
      var checkLength = 0;
      test = String(x);
      for (var i = 0; i < Math.floor(test.length / 2); i++) {
        if (test[i] === test[test.length - 1 - i]) {
          checkLength++;
        }
      }

      if (checkLength === Math.floor(test.length / 2)) {
        check = true;
        result = x;
      }
    }
  }

  return result;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
