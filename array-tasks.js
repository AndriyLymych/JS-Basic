let arr = [
    [1, 21, 4, 35, 2, 23, 54],
    [32, 34, 3, 35, 2, 32],
    [32, 45, 55, 7, 2, 'fassa', 'am', false],
    [null, 2, 13, 'afasd', 21]
];
for (let i = 0; i < arr.length; i++) {
    console.log('*************');
    console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);

    }
}
let a = ['Andriy', 25, 3, 'opel'];
let b = 0;
while (b < a.length) {
    console.log(a[b] + '<br>');
    b++
}
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
let arr1 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 3 && arr1[i] < 10) {
        document.write(arr1[i] + '<br>')
    }
}

let numbSum = 0;
let arrNumb = [-2, 12, 5, 1 - 1, 21, -23, -2, -1, 5];
for (let i = 0; i < arrNumb.length; i++) {
    if (arrNumb[i] > 0) {
        numbSum += arrNumb[i]
    }
}
console.log(numbSum);
let arr2 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log('yes');
    }

}
let day = 'Tue';
let weekArr = ['Sun', 'Mon', day, 'Wed', 'Thi', 'Fri', 'Sut'];
for (let i = 0; i < weekArr.length; i++) {

    if (weekArr[i] === 'Sun' || weekArr[i] === 'Sut') {
        document.write(`<strong>${weekArr[i]}</strong> ` + '<br>');

    } else if (weekArr[i] === day) {
        document.write(`<i>${weekArr[i]}</i>` + '<br>')
    } else {
        document.write(weekArr[i] + '<br>')
    }
}
let arrNumber = ['10', '20', '30', '50', '235', '3000'];
for (let i = 0; i < arrNumber.length; i++) {
    for (let j = 0; j < arrNumber[i].length; j++) {

        if (arrNumber[i][j] === '1' || arrNumber[i][j] === '2' || arrNumber[i][j] === '5') {
            document.write(`${+arrNumber[i]}` + '<br>');
        }

    }
}


for (let i = 1000; i > 1; i /= 2) {
    console.log(i);
}

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newNumbs = '';
let i = 0;
while (i < numbs.length) {
    newNumbs = `${'-' + numbs + '-'} `;
    i++
}
console.log(newNumbs);
