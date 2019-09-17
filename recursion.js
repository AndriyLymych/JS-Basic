// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' ) {
//         array.push(arr[i]);
//     }
//    if (typeof arr[i]!=='number'){
//        for (const j in arr[i]) {
//            array.push(arr[i][j])
//
//        }
//    }
//
// }
//
// console.log(array);
let arr = [1, ['22', 212, true, 4], 7, -3, {name: 'Petya', status: false, age: 24}, 55, 6];

let i = 0;
let j = 0;
let array = [];

function recursionArr() {
    if (i < arr.length) {
        if (typeof arr[i] === 'number') {
            array.push(arr[i])
        }
        if (j < arr[i].length) {
            array.push(arr[i][j]);
            j++;

        }
        for (let k in arr[i]){
            array.push(arr[i][k])
        }
        i++;
        recursionArr()
    }
}

recursionArr();
console.log(array);


const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];


let index = 0;

function inv() {
    if (index < inventors.length) {
        console.log(inventors[index].first + ' ' + inventors[index].last + ' ' + inventors[index].year + ' ' + inventors[index].passed);
        index++;
        inv()
    }
}

inv();


//
function f(i) {
    if (i<1){
        setInterval(()=>{
            console.log(i++);
        },1000);
        i++;
        f(i)
    }
}
f(0);