// Problem buatlah bintang seperti berikut
let input = 5
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 0; i <= input; i++){
    let bintang = "";
    for (j = 0; j < i ; j++){
        bintang += "*";
    };
    console.log(bintang);
}