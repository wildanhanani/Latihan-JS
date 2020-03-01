function biodata() {
	var biodataLengkap = {
		nama : "Muhammad Wildan Hanani",
		alamat : "Makamhaji Kartasura",
		hobi : ["futsal", "renang", "dll"],
		school : {highschool:"Sma Batik 1 Ska", university:"Universitas Muhammadiyah Surakarta"},
		skills : [{php:"70"},{js:"80"}]

	};
	return JSON.stringify(biodataLengkap)
}

console.log(biodata());
