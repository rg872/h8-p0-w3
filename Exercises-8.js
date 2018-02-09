function pasanganTerbesar(num) {
  // you can only write your code here!
  var numMax;
  var numComp;

  var numStr = String(num);
  numMax = Number(numStr.substr(0, 2));

  for (var i = 1; i < numStr.length - 1; i++) {
    numComp = Number(numStr.substr(i, 2));
    if (numMax < numComp) {
      numMax = numComp;
    }
  }

  return numMax;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
