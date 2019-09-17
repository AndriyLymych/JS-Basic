let cars = [
    {car: 'Audi', power: 1.8, owner: {name: 'Andriy', age: 25, exp: 2}, price: 2000, year: 2010},
    {car: 'BMW', power: 2.1, owner: {name: 'Petro', age: 19, exp: 3}, price: 3000, year: 2014},
    {car: 'Lada', power: 1.3, owner: {name: 'Ivan', age: 55, exp: 22}, price: 700, year: 1980},
    {car: 'Toyota', power: 2.8, owner: {name: 'John', age: 34, exp: 12}, price: 5000, year: 2016},
    {car: 'Mercedes', power: 1.9, owner: {name: 'Roman', age: 29, exp: 7}, price: 1900, year: 2008},
    {car: 'Shkoda', power: 2.4, owner: {name: 'Anastasia', age: 24, exp: 1}, price: 3500, year: 2009},
    {car: 'Jeep', power: 2.6, owner: {name: 'Vasyl', age: 18, exp: 2}, price: 6000, year: 2017},
    {car: 'Mitsubishi', power: 2.5, owner: {name: 'Vicktor', age: 39, exp: 16}, price: 2400, year: 2003},

];
let newOwners = [
    {
        name: 'Yevgen',
        age: 33,
        exp: 2
    },
    {
        name: 'Petro',
        age: 29,
        exp: 6
    },
    {
        name: 'Misha',
        age: 35,
        exp: 14,
    },
    {
        name: 'Bob',
        age: 25,
        exp: 1
    },
    {
        name: 'Ben',
        age: 57,
        exp: 24
    },
    {
        name: 'Sem',
        age: 75,
        exp: 44
    },
    {
        name: 'Molly',
        age: 18,
        exp: 2
    },
    {
        name: 'John',
        age: 60,
        exp: 34
    }
];
let newCarPowerAndOwners = cars.map((car, index) => {
    if (index % 2 === 0) {
        car.power = (+(car.power * 1.1).toFixed(2));
        car.owner = newOwners[index];
        car.price = (+(car.price * 1.05).toFixed(0));

    }
    return car
});

let newExp = cars.map((car) => {
    if (car.owner.exp < 5) {
        car.owner.exp += 1;
    }
    return car
});
console.log(newExp);
let carPrice = cars.reduce((car1, car2) => {
    return car1 + car2.price
}, 0);
console.log(carPrice);

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
console.log('************************')
let firstIndex = users.map((value) => {

    return value.name
}).indexOf('max');

let lastIndexOf = users.map((value) => {

    return value.name
}).lastIndexOf('max');
console.log(firstIndex);
console.log(lastIndexOf);
console.log('***********index*************')
let sortedAge = users.sort((a, b) => {
    return a.age - b.age
});
console.log(sortedAge);

console.log('************************');
let sortedName = users.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    if (a.name < b.name) {
        return -1
    }
});
console.log(sortedName);

console.log('************************');

console.log('************************');
let sortedNameLength = users.sort((a, b) => {
    return a.name.length - b.name.length
});
console.log(sortedNameLength);

console.log('************************');

console.log('************************');
console.log('************************');

console.log('************************');
let older = users.map(user => {
    user.age += 1;
    return user
});
console.log(older);


console.log('************************');

console.log('************************');
console.log('************************');

console.log('************************');
console.log('************************');

let deleted = users.splice(3, 4);
console.log(users);

console.log('************************');
console.log('************************');
let newUser = users.splice(5, 1, {name: 'boris', age: 61, status: true});
console.log(users);
console.log('************************');
console.log('------------------------------');
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let coupleArr = arr.filter((value, index) => {
    if (index % 2 === 0) {
        return value
    }
}).map(value => {
    return value
});


console.log(coupleArr);


console.log('************************');
console.log('------------------------------');
let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newRandom = random.map((value, index) => {
    return value = parseInt(Math.random() * (1012 - 112) + 112)
});
console.log(newRandom);
console.log('************************');
console.log('------------------------------');


let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let newArr = arr1.concat(arr2);
newArr.push(4, 5, 6);
newArr.unshift(-1, -2, -3);
console.log(newArr);
let str = ['js', 'css', 'jq'].pop();

console.log(str);
let array = [1, 2, 3, 4, 5];
let sliced = array.slice(0, 3);
console.log(sliced);


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
let names = inventors.map((value) => {
    return value.first
});
console.log(names);

console.log('----==========-----');
let surnames = inventors.map((value) => {
    return value.first.concat(' ' + value.last)
});
console.log(surnames);
console.log('----==========-----');
console.log('----==========-----');
let old = inventors.sort((a, b) => {

    return (a.passed - a.year) - (b.passed - b.year)
});
console.log(old);
console.log('----==========-----');
console.log('----==========-----');
console.log('----==========-----');


let sortLastName = inventors.sort((a, b) => {
    if (a.last > b.last) {
        return 1
    }
    if (a.last < b.last) {
        return -1
    }
});
console.log(sortLastName);
console.log('**********====');
let some = inventors.some((value) => {
    return value.year === 1878
});
console.log(some);
console.log('**********====');

console.log('**********====');
let yearSum = inventors.reduce((previousValue, currentValue) => {
    return previousValue + (currentValue.passed - currentValue.year)
}, 0);
console.log(yearSum);


console.log('**********====');

const transport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// * Знайти суму кожного типу транспорту, які є в масиві

let car = [];
let truck = [];
let bike = [];
let walk = [];
let van = [];

let transportSum = transport.map((value, index) => {
    if (value === 'car') {
        return car.push(value)
    }
    if (value === 'truck') {
        return truck.push(value)
    }
    if (value === 'bike') {
        return bike.push(value)
    }
    if (value === 'walk') {
        return walk.push(value)
    }
    if (value === 'van') {
        return van.push(value)
    }


});
console.log('car:' + car.length, 'truck:' + truck.length, 'bike:' + bike.length, 'walk:' + walk.length, 'van:' + van.length);

