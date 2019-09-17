class Princesses {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let Anastasia = new Princesses('Anastasia', 25, 38);
let Olia = new Princesses('Olia', 22, 35);
let Katya = new Princesses('Katya', 27, 37);
let Natalya = new Princesses('Natalya', 23, 36);
let Marina = new Princesses('Marina', 21, 39);
let Nadia = new Princesses('Nadia', 29, 42);
let Kristina = new Princesses('Kristina', 35, 40);
let Osaka = new Princesses('Osaka', 20, 43);
let Nafta = new Princesses('Nafta', 19, 41);
let Olenka = new Princesses('Olenka', 32, 44);

let princessArr = [Anastasia, Olia, Katya, Natalya, Marina, Nadia, Kristina, Osaka, Nafta, Olenka];


class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;

    }
}

let Andrew = new Prince('Andrew', 25, 38);
princessArr.filter(value => {
    if (value.size === Andrew.shoe) {
        console.log(Andrew.name + ' will merry with ' + value.name + `, because the shoe with size: ${value.size} is her`);
    }
});

Array.prototype.getArr = function () {
    this.forEach(value => {
        console.log(value);
    })
};

Array.prototype.coupleValue = function () {
    this.filter(value => {
        if (value % 2 === 0) {
            console.log(value);
        }
    })
};
Array.prototype.coupleIndex = function () {
    for (let i = 0; i < this.length; i++) {
        if (i % 2 === 0) {
            console.log(this[i]);
        }

    }
};
let arr = [1, 22, 32, 4, 5, 5, 6, 67, -43, -3, -12];
arr.getArr();
console.log('***********');
arr.coupleIndex();
console.log('===========');
arr.coupleValue();


class Car {

    constructor(name, volume, price, year) {
        this.name = name;
        this.volume = volume;
        this.price = price;
        this.year = year;
    }

    info() {
        return `congratulations , you buy ${this.name} ${this.year}`
    }
}

class SuperCar extends Car {

    constructor(name, volume, price, year, type, owner, fuel) {
        super(name, volume, price, year);
        this.type = type;
        this.owner = owner;
        this.fuel = fuel;

    }

    moreInfo() {
        return `${super.info()} , ${this.owner}`
    }
}


let audi = new SuperCar('Audi', 1.8, 2000, 2010, 'car', 'Andrey', 'gas');
let bmw = new SuperCar('Bmw', 1.9, 2100, 2011, 'car', 'Ivan', 'gasoline');
let man = new SuperCar('Audi', 3.8, 14000, 2012, 'van', 'John', 'gasoline');
let jeep = new SuperCar('Jeep', 2.3, 3000, 2011, 'car', 'Roman', 'gas');
let viper = new SuperCar('Viper', 1.2, 1000, 2008, 'bike', 'Pedro', 'gasoline');
let cars = [audi, bmw, man, jeep, viper];
console.log(cars[1].moreInfo());
console.log(cars);
cars.filter(value => {
    console.log(value.name);
});

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    getProductInfo() {
        return `This is ${this.name}, it cost ${this.price} UAH`
    }
}

class Category extends Product {
    constructor(name, price, category) {
        super(name, price);
        this.category = category
    }

    getCategoryInfo() {
        return `${super.getProductInfo()} and it is ${this.category}.`;
    }
}

class Market extends Category {
    constructor(name, price, category, market) {
        super(name, price, category);
        this.market = market;
    }

    getMarketInfo() {
        return `${super.getCategoryInfo()} You can buy it in ${this.market}`
    }
}


let onion = new Market('onion', 2, 'vegetables', 'ATB');
let apple = new Market('apple', 4, 'fruit', 'Silpo');
let lamb = new Market('lamb', 120, 'meat', 'Rykavychka');
let salmon = new Market('salmon', 170, 'fish', 'Ashan');
let products = [onion.getMarketInfo(), apple.getMarketInfo(), lamb.getMarketInfo(), salmon.getMarketInfo()];
console.log(products);


class Worker {
    get name() {
        return this._name;
    }

    get rate() {
        return this._rate;
    }
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days
    }

    get name() {
        return `Hello, my name is ${this._name}`
    }

    get surname() {
        return `Hello, my surname is ${this._surname}`
    }

    get rate() {
        return `Your rate is ${this._rate}`
    }

    set rate(newRate) {
        this._rate = newRate;

    }

    get days() {
        return `You have ${this._days} days this month`
    }

    set days(newDays) {
        this._days = newDays
    }

    get salary() {
        return `${this._name} ${this._surname}, you will get ${this._rate * this._days} UAH in this month`
    }

}

console.log('*********WOOOORKEEERS**********');
let worker1 = new Worker('Petro', 'Petrov', 300, 20);
let worker2 = new Worker('Roma', 'Pupkin', 500, 22)
console.log(worker1.salary);
console.log(worker2.salary);
console.log(worker1.days);
worker1.days = 25;
worker1.rate = 600;
console.log(worker1.salary);

class MySting {
    constructor(sting) {
        this.string = sting
    }

    reverseString() {
        return this.string.split('').reverse().join('')
    }

    ucFirst() {
        return this.string.split('').map((value, index, array) => {
            if (index === 0) {
                return value.toLocaleUpperCase()
            }
            return value
        }).join('')


    }

    ucWords() {
        return this.string.split(' ').map((value, index, array) => {
            if (value[0]) {
                return (value[0].toLocaleUpperCase() + array[index].slice(1, array[index].length))
            }

        }).join(' ')
    }
}


let str1 = new MySting('be quaid please')
let mySting1 = new MySting('hello world, i love js and my life');
console.log(str1.reverseString());
console.log(str1.ucFirst());

console.log(str1.ucWords());

console.log('*************');
console.log(mySting1.ucWords());
console.log(mySting1.reverseString());
console.log(mySting1.ucFirst());



class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `Hello, I am ${this.name} ${this.surname}`
    }
}

let user1 = new User('Vasya', 'Pupkin');
console.log(user1.getFullName());

class Student extends User {

    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getFullName() {
        return super.getFullName() + ' and I am a sudent';
    }

    getCourse() {
        if ((new Date().getFullYear() - this.year) <= 5) {
            return `${this.name} ${this.surname} you are at ${new Date().getFullYear() - this.year} course now`
        } else {
            return `${this.name} ${this.surname} you finished university ${(new Date().getFullYear() - this.year) - 5} years ago`
        }
    }
}

let student1 = new Student('Andriy', 'Lymych', 2011);
console.log(student1.getFullName());
console.log(student1.getCourse());



class Human {
    constructor(name, surname, gender, age, car, education, skills) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.car = car;
        this.education = education;
        this.skills = skills;
    }

    toString() {
        return `Hello my name is ${this.name + ' ' + this.surname} , i am a ${this.gender + ' ' + this.age} years old. I have bought ${this.car}. I have a ${this.education} education. I have studied ${this.skills}.`
    }

}

let ira = new Human('Ira', 'Vaskyv', 'woman', 22, 'bmw', 'high', ['js',' node.js']);
let ivan = new Human('Ivan', 'Ivanov', 'man', 26, 'shkoda', 'medium', ['history']);
let petro = new Human('Petro', 'Pyatochkin', 'man', 29, 'jeep', 'beginer', ['nothing']);
let john = new Human('John', 'Jameson', 'man', 32, 'mersedes', 'high', ['js',' node.js',' react',' angular']);
let ben = new Human('Ben', 'Tarkovsky', 'man', 52, 'sedan', 'medium', ['cooking',' traveling']);

console.log(ira.toString());
console.log(petro.toString());



let aray=[1,32,34,-4,2,3232 ];
let temp;
for (let i = 0; i < aray.length-1; i++) {
    for (let j = 0; j < aray[i].length-i; j++) {
        if (aray[j]<aray[j+1]){
            temp=aray[j];
            aray[j]=aray[j+1];
            aray[j+1]=temp


        }

    }

}

