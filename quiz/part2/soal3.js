// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let FirstWord3 = word3.substring(0, 3);
let SecondWord3 = word3.substring(4, 14);
let ThirdWord3 = word3.substring(15, 17);
let FourthWord3 = word3.substring(18, 20);
let FifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + FirstWord3);
console.log('Second Word: ' + SecondWord3);
console.log('Third Word: ' + ThirdWord3);
console.log('Fourth Word: ' + FourthWord3);
console.log('Fifth Word: ' + FifthWord3);

console.log("word3: " + FirstWord3 + " " + SecondWord3 + " " + ThirdWord3 + " " + FourthWord3 + " " + FifthWord3);