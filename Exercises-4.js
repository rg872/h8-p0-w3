function dataHandling2(input) {
  var tanggal;
  var bulan;
  var tahun;
  var date = [];
  var date1 = [];
  var date2 = [];
  var name;

  input[1] = input[1].concat('Elsharawy');
  input[2] = 'Provinsi ' + input[2];
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');

  tanggal = String(input.slice(3, 4)).substr(0, 2);
  bulan = String(input.slice(3, 4)).substr(3, 2);
  tahun = String(input.slice(3, 4)).substr(6);

  name = String(input.slice(1, 2)).substr(0, 15);

  date = [tanggal, bulan, tahun];
  date2 = date.join('-');
  date1 = date.sort(function (value1, value2) { return Number(value1) < Number(value2); });


  switch (bulan) {
    case '01':  bulan = 'Januari'; break;
    case '02':  bulan = 'Februari'; break;
    case '03':  bulan = 'Maret'; break;
    case '04':  bulan = 'April'; break;
    case '05':  bulan = 'Mei'; break;
    case '06':  bulan = 'Juni'; break;
    case '07':  bulan = 'Juli'; break;
    case '08':  bulan = 'Agustus'; break;
    case '09':  bulan = 'September'; break;
    case '10':  bulan = 'Oktober'; break;
    case '11':  bulan = 'November'; break;
    case '12':  bulan = 'Desember'; break;
  }

  console.log(input);
  console.log(bulan);
  console.log(date1);
  console.log(date2);
  console.log(name);
}

var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989",
   "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
