function balikString(str) {
  var result = '';
  if ((typeof str) === 'string') {
    for (var i = str.length - 1; i >= 0; i--) {
      result = result + str[i];
    }
  }else {
    result = 'Tolong masukan string';
  }

  return result;
}

console.log(balikString('null'));
