// functions-constructors:

function PC(videoCard, OZU, processor) {
    this.videoCard = videoCard;
    this.OZU = OZU;
    this.processor = processor
}

PC.prototype.turnOn = function () {
    console.log('Your PC is turned on');
};
PC.prototype.turnOff = function () {
    console.log('Your PC is turned off');
};
PC.prototype.carrying = function () {
    throw new Error('Its very difficult')
};
PC.prototype.playGames = function () {
    if (this.OZU >= 8 && this.processor > 1.3) {
        console.log('you can play games');
    } else {
        throw new Error('Its very weak computer')
    }
};
PC.prototype.info = function () {
    console.log(`Hello! Its computer has such settings: ${'1)Video:' + this.videoCard + '; 2)OZU:' + this.OZU + '; 3)Processor:' + this.processor}`);

};
let pc1 = new PC('Nvidia GForce GTX 440', 4, 1.2);
let pc2 = new PC('Nvidia GForce GTX 650', 8, 1.5);

pc1.info();

pc2.playGames();
pc2.info();

console.log('************');
console.log('************');

function Laptop(videoCard, OZU, processor, name, weight, size, drive,) {
    PC.apply(this, arguments);
    this.name = name;
    this.weight = weight;
    this.size = size;
    this.drive = drive

}

Laptop.prototype = Object.create(PC.prototype);
let lenovo = new Laptop('Nvidia GForce GTX 800', 10, 1.5, 'Lenovo', 3, 18, true);
Laptop.prototype.info = function () {
    console.log(`Hello! Its computer has such settings: ${'1)Video:' + this.videoCard + '; 2)OZU:' + this.OZU + '; 3)Processor:' + this.processor +
    '; 4)Name:' + this.name + '; 5)Weight:' + this.weight + '; 6)Size:' + this.size + '; 7)Drive:' + this.drive}`);
};

lenovo.info();
console.log('===-=-=-=-=--=--=--=-');

function UltraBook(videoCard, OZU, processor, name, weight, size, drive, games) {
    Laptop.apply(this, arguments);
    this.games = games;

}

UltraBook.prototype = Object.create(Laptop.prototype);
let ultraBookDELL = new UltraBook('Nvidia GForce GTX 1050 ti', 16, 2.2, 'Dell', 1.8, 15.6, false, ['rdr2', 'GOW']);
console.log(ultraBookDELL.drive);
UltraBook.prototype.info = function () {
    console.log(`Hello! Its computer has such settings: ${'1)Video:' + this.videoCard + '; 2)OZU:' + this.OZU + '; 3)Processor:' + this.processor +
    '; 4)Name:' + this.name + '; 5)Weight:' + this.weight + '; 6)Size:' + this.size + '; 7)Drive:' + this.drive + '; 8)Games:' + this.games}`);
};
UltraBook.prototype.playGames = function () {
    console.log(`You can play ${this.games}`);
};
UltraBook.prototype.carrying = function () {
    if (this.weight < 2) {
        console.log('I can take my computer');
    } else {
        throw new Error('its very difficult')
    }

};
ultraBookDELL.info();
ultraBookDELL.carrying();
ultraBookDELL.playGames();

function Human(name, age) {
    this.name = name;
    this.age = age
}

Human.prototype.incrementAgeAndChangeName = function (newName, incAge) {
    return {
        newName: this.name = newName,
        newAge: this.age += incAge
    }
};
console.log('*************************');
let vasyl = new Human('Vasyl', 22);
vasyl.incrementAgeAndChangeName('Petro', 5);
console.log(vasyl);

function Student(name, age, group) {
    Human.apply(this, arguments);
    this.group = group
}

Student.prototype = Object.create(Human.prototype);
let student = new Student('Olya', 22, 1);
student.incrementAgeAndChangeName('Katya', 2);
console.log(student);


// call, apply, bind

console.log('*************************');

let user1 = {
    name: 'Andriy',
    surname: 'Lymych',
    skills: ['js'],
    salary: 500
};
let user2 = {
    name: 'Petro',
    surname: 'Petriv',
    skills: ['js', 'sql'],
    salary: 800
};

function improve(newSkills, newSalary) {
    this.skills.push(newSkills);
    this.salary += newSalary;
    return `My name is ${this.name + ' ' + this.surname}. I know ${this.skills}. I take ${this.salary}$.`
}

console.log(improve.apply(user1, [['node.js', 'payton'], 200]));
console.log(improve.call(user2, 'css', 100));


let improvedUser = improve.bind(user2, 'php', 400);
console.log(improvedUser());

// Взять библиотечный класс Array и добавить ему новый метод который:

// 1) выводит наименьший числовой элемент массива:

Array.prototype.minArrayNumb = function () {

    let i = 0;
    let min = this[i];
    while (i < this.length) {
        if (min > this[i + 1]) {
            min = this[i + 1]
        }
        i++

    }
    console.log(min);

};
let arr = [1, 12, 4, 5, -33, -2, 32, 12, -775];
arr.minArrayNumb();
// 2) выводит наименьший по размеру строчный элемент массива;
Array.prototype.lessArrStr = function () {
    return this.sort((a, b) => {
        return a.length - b.length;

    }).filter((value, index) => {
        if (index === 0) {
            console.log(value);
        }
    })
};
let str = ['sadsa', 'ads', 'aas', 'q', 'assa'];
str.lessArrStr();

//3)  выводит только объекты у которых присутствует поле id:
Array.prototype.objWithId = function () {
    return this.filter((value) => {
        if (value.hasOwnProperty('id')) {
            return value
        }
    })
};

let array = [
    {id: 1, name: 'Andriy', age: 25},
    {name: 'Vasyl', age: 22},
    {id: 2, name: 'Petro', age: 22},
    {id: 3, name: 'Ivan', age: 27},
    {name: 'Oleg', age: 15},
];
console.log(array.objWithId());


//4) Создаем свой метод map

Array.prototype.myMap = function (cb) {
    let result=[];
    for (let i = 0; i < this.length; i++) {
        let index=i;
        let array=this;
        let value= this[index];
        result.push(cb(value,index,array))

    }
    return result
};


let mapped = [1, 231, 34, 6];

console.log(mapped.myMap(function (value,index,array) {
   return value*2
}));

