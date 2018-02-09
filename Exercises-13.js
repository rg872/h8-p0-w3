function targetTerdekat(arr) {
  // you can only write your code here!
  var start = 0;
  var end = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      start = i;
    }else if (arr[i] === 'x') {
      end = i;
      break;
    }
  }

  if (end < start || end == start) {
    for (var x = 0; x < arr.length; x++) {
      if (arr[x] === 'x') {
        start = x;
      }else if (arr[x] === 'o') {
        end = x;
        break;
      }
    }
  }

  //console.log(end + start);
  return end - start;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
