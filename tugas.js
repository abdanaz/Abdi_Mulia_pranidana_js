//do while

let banyak = 0;
while (banyak < 10) {
  console.log("Aku membeli buah sebanyak " + (banyak + 1));
  banyak++;
}

let berat = 0;
do {
  console.log("Aku juga membeli buah seberat " + (berat + 1));
  berat++;
} while (berat < 10);

//for

for (let a = 0; a< 30; a++) {
    console.log("Hp ke " + (a + 1));
  }


  //function

  function bagi (p, q) {
    return p / q;
  }
let hasil = bagi(10501, 101);
console.log("Hasil Pembagiannya adalah =  " + hasil);


//if else
let semangka = 3;
let biji = 5;

if (semangka > biji) {
  console.log("Maka besar semangka lebih besar dari biji");
} else {
  if (semangka < biji) {
    console.log("Maka besar semangka lebih kecil dari biji");
  } else {
    console.log("maka semangka dan biji sama besarny");
  }
}

//switch

let janda= 1;

switch (janda) {
  case 1:
    console.log("Di sini ada janda");
    break;
  case 2:
    console.log("Di sini ada anak muda");
    break;
  default:
    console.log("Tidak ada janda dan anak muda di sini");
}