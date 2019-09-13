function plus(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log((a + b));
    } else {
        console.log('Enter numbers');
    }
}

plus(10, 4);

function iterator(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] > 15) {
            console.log(arr[i]);
        }
    }
}

iterator([2, 34, 21, 1, 2, 32, 4, 3, 4, 35, 5]);
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.age > 28 && !user.status){
        console.log(user);
    }
}
/*for (let i = 100; i >=0; i-=2) {
    console.log(+i.toFixed(0));

}*/
let empty =[];

for (let i = 0; i < 10; i++) {
    empty[i]='x';

}
console.log(empty);
let arr=[];
for (let i = 0; i <=10; i++) {
    arr[i]=i;
}
console.log(arr);

let arrr=[];

for (let i = 0.32; i <1; i+=0.2) {
    arrr[i]=i.toFixed(2);
    console.log(+arrr[i]);
}

let random =[];
for (let i = 0; i < 10; i++) {
    random[i]= (Math.random() * (10-1)+1).toFixed(0)

}
console.log(random);
let array = [1,2,4,5];
let count = 0;
for (let i = 0; i < array.length; i++) {
    let pow = Math.pow(array[i],2);
    count+=pow
}
console.log(count);
let array2 = [1,2,2,5,5];
let count2 = 0;

for (let i = 0; i < array2.length; i++) {
    count2+=array2[i];

}
console.log(count2/array2.length);


let a = +prompt();
let sign = prompt();
let b = +prompt();
function calc() {
    if (sign==='+'){
        console.log(a + b);
    } else if (sign==='-'){
        console.log(a - b);
    } else if (sign==='*'){
        console.log(a * b);
    } else if (sign==='/'){
        console.log(a / b);
    } else {
        console.log(false);
    }
}
calc();



