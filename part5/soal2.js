// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 20; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 3; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 1969; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
let teksbulan;
let ddmmyy;
//code switch case kamu disini
/* algo: fokus ke bulan dimana bulan 1 = januari dst 12 desember. meaning 1 refer to jan meaning using array
1. declare array [Januari, Februari, Maret, April, Mei, Juni, Juli, Agustus, September, Oktober, November, Desember, Ophiucus]
2. refer inputan int dari bulan ke string di dlm array
3. Gabungin value dari masing masing variable jadi format tanggal
*/

/*
const arraybulan =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember","Desuari"];// declare array 
const indexbulan = bulan -1;//array mulai dr 0

const ddmmyy = tanggal+" "+arraybulan[indexbulan]+" "+tahun;
console.log(ddmmyy);
*/


switch(bulan) {
    case 1:
        teksbulan = "January";
      break;
    case 2:
        teksbulan = "Februari";
        break;
    case 3:
        teksbulan = "Maret";
        break;
    case 4:
        teksbulan = "April";
        break;
    case 5:
        teksbulan = "Mei";
        break;
    case 6:
        teksbulan = "Juni"
        break;
    case 7:
        teksbulan = "Juli"
        break;
    case 8:
        teksbulan = "Agustus"
        break;
    case 9:
        teksbulan = "September"
        break;
    case 10:
        teksbulan = "Oktober"
        break;
    case 11:
        teksbulan = "November"
        break;
    case 12:
        teksbulan = "Desember"
        break;
        default:
            teksbulan = "cuman ada bulan 1 - 12 bang"
}

if (!teksbulan || teksbulan == "cuman ada bulan 1 - 12 bang" ) {
    console.log("cuman ada bulan 1 - 12 bang");
    
} else ddmmyy = (`${tanggal} ${teksbulan} ${tahun}`); 

console.log(ddmmyy);
