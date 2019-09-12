let cars = [
    {car: 'Audi', power: 1.8, owner: {name: 'Andriy', age: 25, exp: 2}, price: 2000, year: 2010},
    {car: 'BMW', power: 2.1, owner: {name: 'Petro', age: 19, exp: 3}, price: 3000, year: 2014},
    {car: 'Lada', power: 1.3, owner: {name: 'Ivan', age: 55, exp: 22}, price: 700, year: 1980},
    {car: 'Toyota', power: 2.8, owner: {name: 'John', age: 34, exp: 12}, price: 5000, year: 2016},
    {car: 'Mercedes', power: 1.9, owner: {name: 'Roman', age: 29, exp: 7}, price: 1900, year: 2008},
    {car: 'Shkoda', power: 2.4, owner: {name: 'Anastasia', age: 24, exp: 1}, price: 3500, year: 2009},
    {car: 'Jeep', power: 2.6, owner: {name: 'Vasyl', age: 18, exp: 2}, price: 6000, year: 2017},
    {car: 'Mitsubishi', power: 2.5, owner: {name: 'Vicktor', age: 39, exp: 16}, price: 2400, year: 2003},
    {car: 'Porshe', power: 3.1, owner: {name: 'Oleh', age: 27, exp: 9}, price: 20000, year: 2018},
    {car: 'Nissan', power: 3.4, owner: {name: 'Oleksandr', age: 51, exp: 26}, price: 22000, year: 2019}
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
console.log(cars.map((car) => {
    for (let i = 0; i < cars.length; i+=2) {

    return car.power *= 1.1
    }

})
);

/*
let carsPrice = 0;
for (const car of cars) {

    if (car.owner.exp < 5) {
        car.owner.exp = car.owner.exp + 1;
    }
    carsPrice += car.price
}
console.log(carsPrice);
let i = 0;

while (i < cars.length) {
    cars[i].power = (+(cars[i].power * 1.1).toFixed(2));
    cars[i].price = (+(cars[i].price * 1.05).toFixed(0));
    cars[i].owner = newOwners[i];
    i += 2;
}

console.log(cars);


console.log('-------------------------------------------');
console.log('**************************************************');

let arr = [2, 5, 3, 9];
let res = 1;
for (let j = 0; j < arr.length; j++) {
    res *= arr[j]

}
console.log(res);


let week = {
    first: 'monday',
    second: 'tuesday',
    third: 'wednesday',
    fourth: 'thursday',
    fifth: 'friday',
    sixth: 'saturday',
    seventh: 'sunday'
};
day = week.seventh;
console.log(week.fourth);
console.log(day);

let manyArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(manyArray[1][0]);
*/
