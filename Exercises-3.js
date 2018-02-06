function dataHandling(arr) {
  for (var i = 0; i < arr.length; i++) {

    for (var x = 0; x < arr[i].length; x++) {

      switch (arr[i][x]) {
        case arr[i][0] : console.log('Nomor ID: ' + arr[i][x]); break;
        case arr[i][1] : console.log('Nama Lengkap: ' + arr[i][x]); break;
        case arr[i][2] : console.log('TTL: ' + arr[i][x] + ' ' + arr[i][x + 1]); break;
        case arr[i][4] : console.log('Hobi: ' + arr[i][x] + '\n'); break;
      }
    }
  }
}

var input = [
                ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
                ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
                ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
                ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
            ];

dataHandling(input);
