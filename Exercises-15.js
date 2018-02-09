function groupAnimals(animals) {
  // you can only write your code here!
  var result = [[]];
  animals = animals.sort();
  var comp =  animals[0].substr(0, 1);
  var x = 0;

  for (var i = 0; i < animals.length; i++) {
    if (comp ==  animals[i].substr(0, 1)) {
      result[x].push(animals[i]);
    }else {
      x = x + 1;
      result.push([animals[i]]);
      comp =  animals[i].substr(0, 1);
    }
  }

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
