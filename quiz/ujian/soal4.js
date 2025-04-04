//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++){
        if (str[i] === 'x') {
            xCount++;
        } else {
            oCount++;
        };
    }
    
    if (xCount === oCount) {
        return true;
    } else if (xCount !== oCount) {
        return false;
    };
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true