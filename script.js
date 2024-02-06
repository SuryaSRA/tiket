alert("BONJOUR");

const umur = prompt ( "Masukkan umur anda" );

if (umur >= 13) {
const studio = prompt(" Masukan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");

if (studio == "A" || studio == "B" || studio == "C") {
    const film = prompt("Pilih film \n 1 : 1998 \n 2 : 9 11 \n 3: G30S");

    let namaFilm
    if (film == "1") {
        namaFilm = "1998";
    } else if (film == "2"){
        namaFilm = "9 11";
    }else if(film == "3"){
        namaFilm = "G30S";
    }

    if (film == "1" || film == "2" || film == "3") {
        const nama = prompt( "Masukkan Nama Anda" ) ;
        
        alert(` Berikut Tiket Anda! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`)
    }else{
        alert("Maaf film yang anda pilih tidak tersedia");
    }
}else{
alert("Anda harus memilih Studio");
}
} else {
    alert('Maaf, umur anda harus lebih dari atau sama dengan 13 tahun');
}