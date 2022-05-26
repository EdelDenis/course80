"use strict"

// Rest - оператор и параметры по умолчанию 

// Spread - оператор

let firstArr = [1,2];
let secondArr = [3,4];

let wholeArr = [...firstArr, 2.5, ...secondArr];
console.log(wholeArr);

// Rest оператор берет отдельніе єлементі и обьеденяет их в один массив

const log = function (a, b , ...rest) {
    console.log(a,b,...rest);
}

log("basic", "rest", "operator", "usage");

function calcOrDouble (number , basis = 2) {
    
    console.log(number * basis);
}

calcOrDouble(3,5);
