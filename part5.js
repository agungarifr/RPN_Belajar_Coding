/* 
1. Kamu diminta untuk memprogram suatu game sederhana, PROXYTIA namanya. 

2. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu NAMA dan PERAN. 
    2.1 Variabel peran harus memiliki isi data, 
    2.2 bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
    2.3 bila PERAN kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 

3. Terdapat 3 peran berbeda yaitu KSATRIA, TABIB, dan PENYIHIR. 

4. Tugas Anda adalah untuk membuat program yang mengecek isi variabel PERAN serta mengeluarkan respon sesuai isi variabel tersebut. 
    ada 4 jenis respons sesuai dengan 3 jenis peran yaitu 
        4.1 -- halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
        4.2 -- halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
        4.3 -- halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
        4.4 -- tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada


##tips: belajar penggunaan `` (backtick) pada javascript agar mudah dalam memasukan variabel ke dalam string, tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

=================================
1. define function -> PESAN
2. define vars -> NAMAKOSONG, PERANKOSONG, RESPONKSATRIA, RESPONTABIB, RESPONPENYIHIR, RESPONBOT.
    2.1 define containers -> NAMA, PERAN, RESPON
3. Create input form? -> NAMA, PERAN. 
4. Create Submit button??
5. Create exception/function on button press ??
    5.1 - IF NAMA is EMPTY throw var NAMAKOSONG
    5.2 - IF PERAN is EMPTY throw var PERANKOSONG
    5.3 - IF NAMA & PERAN is EMPTY throw vars NAMAKOSONG & PERANKOSONG
    5.4 - ELSE 
        5.4.1 - IF PERAN = KSATRIA  throw var RESPONKSATRIA
        5.4.2 - IF PERAN = TABIB throw var RESPONTABIB
        5.4.3 - IF PERAN = PENYIHIR  throw var RESPONPENYIHIR
            ELSE
                  throw var RESPONBOT
================================

let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya */

//declare variable,
let NAMAKOSONG = "nama wajib diisi";
let PERANKOSONG = "Pilih Peranmu untuk memulai game";
let RESPONKSATRIA = "kamu dapat menyerang dengan senjatamu!";
let RESPONTABIB = "kamu akan membantu temanmu yang terluka";
let RESPONPENYIHIR = " ciptakan keajaiban yang membantu kemenanganmu!";
let RESPONBOT = "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";

/*INPUT MANUAL SINI*/ 
let NAMA="agus"
let PERAN="KSATRIA"

//fungsi/exception lempar pesan
function PESAN(NAMA, PERAN){

    if (!NAMA || NAMA=="") {
        return NAMAKOSONG;
    }

    if (!PERAN || PERAN=="") {
        return PERANKOSONG;
    }

    if (PERAN == "KSATRIA") {
        return RESPONKSATRIA;
        
    } else if (PERAN == "TABIB") {
        return RESPONKTABIB;
        
    } else if (PERAN == "PENYIHIR") {
        return RESPONKPENYIHIR;
        
    }else  {
        return RESPONBOT;
    }
}

console.log(NAMA, PERAN);
console.log(PESAN(NAMA,PERAN));

    

