function biodata() {
	var biodataLengkap = {
		nama : "Muhammad Wildan Hanani",
		alamat : "Makamhaji Kartasura",
		umur : console.log(umur(2019,1996)),
		hobi : ["futsal", "renang", "dll"],
		school : {highschool:"Sma Batik 1 Ska", university:"Universitas Muhammadiyah Surakarta"},
		skills : [{php:"70"},{js:"80"}]

	};
	return JSON.stringify(biodataLengkap)
}

console.log(biodata());

function umur(thnskrng, tahunlhir){
	hasil = thnskrng-tahunlhir;
	return hasil;
}

function tambah(a, b){
	hasilTambah = a + b;
	return hasilTambah;
}

console.log(tambah(5,2));
// var nilai1 = 50;
// var nilai2 = 25;
// var hasilpenambahan = tambah(nilai1, nilai2);

// console.log(hasilpenambahan);
