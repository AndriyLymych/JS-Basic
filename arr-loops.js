console.log('***************');
console.log('first');

let coupleArr = [];
for (let i = 0; i < 100; i++) {
    coupleArr[i] = i;
    if (coupleArr[i] % 2 === 0) {
        console.log(coupleArr[i]);
    }
}
console.log('**********************');
console.log('second');
let notCoupleArr = [];
for (let i = 1; i < 101; i++) {
    notCoupleArr[i] = i;
    if (notCoupleArr[i] % 2 === 1) {
        console.log(notCoupleArr[i]);
    }
}
console.log('************************');
console.log('third');
let randomArr = [];
for (let i = 0; i < 10; i += 3) {
    randomArr[i] = (+(Math.random() * (732 - 8) + 8).toFixed(0));
    if (randomArr[i] % 2 === 0) {
        console.log(randomArr[i]);
    }
}

console.log('**************');
console.log('fourth');
let firstArr = [1, 2, 3, 4, 2312, 2, 11, 23, 4, 5, 33, 4, 21, 2, 11, 245];
let secondArr = [];
for (let i = 0; i < firstArr.length; i += 3) {
    secondArr[i] = firstArr[i];
    console.log(secondArr[i]);
}
console.log('***************');
console.log('fifth');
let array = [1, 2, 21, 4, 2311, 12, 1, 11121, 22, 21, 34, 44, 1, 2, 3, 23, 4, 5, 33, 4, 21, 2, 11, 245];
for (let i = 0; i < array.length; i++) {
    if (array[i + 1] % 2 === 0) {
        console.log(array[i]);
    }
}
console.log('***********');
console.log('sixth');
let price = [100, 250, 50, 168, 120, 345, 188];
let countPrice = 0;
for (let i = 0; i < price.length; i++) {
    countPrice += price[i];
}
let middle = countPrice / price.length;
console.log(middle);

console.log('*************************');
console.log('seventh');

let anotherRandom = [];
let newAnotherRandom = [];
for (let i = 0; i < 10; i++) {
    anotherRandom[i] = (+(Math.random() * (10 - 1) + 1).toFixed(0));
    newAnotherRandom[i] = anotherRandom[i] * 5;
    console.log(newAnotherRandom[i]);
}

console.log('*****************************************');
console.log('eighth');

let diffArr = [1, 2, 'abc', true, 'asd', 1, 2, 44, false, NaN, undefined, 21, 3, 'qwe'];
let newDiffArr = [];
for (let i = 0; i < diffArr.length; i++) {


    if (typeof diffArr[i] === 'number') {
        newDiffArr[i] = diffArr[i];
        console.log(newDiffArr[i]);
    }

}
console.log('addadadadada');
//Розгорнути багатовимірний масив
let arryyyy = [1, [22, 212, 3, 4], 7, -3,{name:'Petya',status:false, age:24}, 55, 6];
let arrayssss = [];
for (let i = 0; i < arryyyy.length; i++) {
    if (typeof arryyyy[i] === 'number' ) {
        arrayssss.push(arryyyy[i]);
    }
    if (typeof arryyyy[i]!=='number'){
        for (const j in arryyyy[i]) {
            arrayssss.push(arryyyy[i][j])

        }
    }

}

console.log(arrayssss);