//1. приймає три числа та виводить та повертає найменьше.
function min(a, b, c) {


    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {

        if (a < b && a < c) {
            return a
        } else if (b < a && b < c) {
            return b
        } else if (c < a && c < b) {
            return c
        } else if (a === b && a === c && b === c) {
            return a
        }

    } else {

        throw new Error('Enter a number , please!!!!!')

    }
}

let minNumb = min(12, -1, 32);
console.log(minNumb);

//приймає три числа та виводить та повертає найбільше.

function max(a, b, c) {

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {


        if (a > b && a > c) {
            return a
        } else if (b > a && b > c) {
            return b
        } else if (c > a && c > b) {
            return c
        } else if (a === b && a === c && b === c) {
            return a
        }

    } else {

        throw new Error('I sad a number , please!!!!!')
    }
}

let maxNumb = max(12, -11, -2);
console.log(maxNumb);

//3.приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше


function many(numbs) {
    let i = 0;
    let minNumber = numbs[i];
    let maxNumber = numbs[i];

    while (i < numbs.length) {
        if (minNumber > numbs[i + 1]) {
            minNumber = numbs[i + 1]
        } else if (maxNumber < numbs[i + 1]) {
            maxNumber = numbs[i + 1]
        }
        i++
    }
    console.log('maxNumber=' + maxNumber);
    return minNumber
}

console.log(many([1, -100, 3, 2, 1, 2, 333, 2, 11, 23]));


//4. виводить масив

function array(arr) {
    let temp = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let sort = array([1, 2, 3, 22, 21, -33, 22, 11, 122121, -222]);
console.log(sort);

// приймає масив та число (i). та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


function change(arr, i) {
    let temp = 0;
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    return arr
}

console.log(change([1, 2, 4, 6, 2], 0));
