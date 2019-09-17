function counter() {
    let x = 10;
    return function () {
        x--;
        console.log(x);
    }
}

let decrement = counter();
decrement();
decrement();
decrement();


function changeUser() {
    let user = {
        name: 'Andriy',
        surname: 'Lymych',
        age: 25,
        password: 1234,
        skills: ['HTML', 'CSS']
    };
    return {
        getName: () => {
            return user.name
        },
        setName: (oldName, newName) => {
            oldName = user.name;
            user.name = newName
        },
        getPassword: () => {
            return user.password
        },
        checkPassword: (checked) => {
            if (checked !== user.password) {
                throw new Error('Enter true password, please!')
            }
            console.log('you are logged');
        },
        changePassword: (oldPassword, newPassword) => {
            oldPassword = user.password;
            if (user.password !== oldPassword) {
                throw new Error('Enter true password, please!')
            }
            user.password = newPassword
        },
        getSkills: () => {
            return user.skills
        },
        setSkills: (oldSkills, newSkills) => {
            oldSkills = user.skills;
            if (oldSkills !== user.skills) {
                throw new Error('Wrong skills!')
            }
            user.skills = newSkills
        },
        getAge: () => {
            return user.age
        },
        setAge: () => {
            user.age += 2
        }
    }
}

let user = changeUser();
console.log(user.getName());
user.setName('Andriy', 'Petro');
console.log(user.getName());
user.checkPassword(1234);
user.changePassword(1234, 'world');
console.log(user.getPassword());
console.log(user.getSkills());
user.setSkills(['HTML', 'CSS'], ['HTML', 'CSS', 'JS']);
console.log(user.getSkills());
console.log(user.getAge());
user.setAge();
console.log(user.getAge());


function carsPark() {
    let cars = [
        {car: 'Audi', power: 1.8, owner: {name: 'Andriy', age: 25, exp: 2}, price: 2000, year: 2010},
        {car: 'BMW', power: 2.1, owner: {name: 'Petro', age: 19, exp: 3}, price: 3000, year: 2014},
        {car: 'Lada', power: 1.3, owner: {name: 'Ivan', age: 55, exp: 22}, price: 700, year: 1980},
        {car: 'Toyota', power: 2.8, owner: {name: 'John', age: 34, exp: 2}, price: 5000, year: 2016},
        {car: 'Mercedes', power: 1.9, owner: {name: 'Roman', age: 29, exp: 7}, price: 1900, year: 2008},
        {car: 'Shkoda', power: 2.4, owner: {name: 'Anastasia', age: 26, exp: 1}, price: 3500, year: 2009},
        {car: 'Jeep', power: 2.6, owner: {name: 'Vasyl', age: 18, exp: 2}, price: 6000, year: 2017},
        {car: 'Mitsubishi', power: 2.5, owner: {name: 'Vicktor', age: 39, exp: 16}, price: 2400, year: 2003},

    ];
    
    let newOwners = [
        {name: 'Yevgen', age: 33, exp: 2},
        {name: 'Petro', age: 29, exp: 6},
        {name: 'Misha', age: 35, exp: 14},
        {name: 'Bob', age: 25, exp: 1},
        {name: 'Ben', age: 57, exp: 24},
        {name: 'Sem', age: 75, exp: 44},
        {name: 'Molly', age: 18, exp: 2},
        {name: 'John', age: 60, exp: 34}
    ];
    /**



     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
     */

    return {
        getCars: () => {
            return cars
        },
        newOwner: () => {
            cars.forEach((value, index) => {
                if (index % 2 === 0) {
                    value.owner = newOwners[index];

                }
            })
        },
        improveCar: () => {
            cars.map((value, index) => {
                if (index % 2 === 0) {
                    value.power = (+(value.power * 1.1).toFixed(2));
                    value.price = (+(value.price * 1.05).toFixed(0));
                }
            })
        },
        improveExp: () => {
            cars.map(value => {

                if (value.owner.exp < 5 && value.owner.age > 25) {
                    value.owner.exp += 1
                }
            })
        },
        getCarsPrice: () => {
            return cars.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.price
            }, 0)
        }

    }

}

let car = carsPark();
console.log('************');
console.log(car.getCars());
console.log('************');


car.newOwner();
car.improveCar();
car.improveExp();
console.log(car.getCarsPrice());
;
console.log(car.getCars());

console.log('NEEEEEEEEEEEEEEXT');
console.log('****************************');


function famousPeople() {
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
    /**
     Вивести масив винахідників які народились в 1500-х роках.
     Вивести масив тільки імен винахідників які народились в 1800-х роках
     Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ])
     Відсортувати винахідників за кількістю прожитих років
     Відсортувати людей але тільки за прізвищем
     Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false
     * Знайдіть суму років які прожили всі винахідники разом
     * Знайти суму кожного типу транспорту, які є в масиві
     **/
    return {
        getInventorsCentury: () => {
            return inventors.filter((value) => {
                return value.year >= 1500 && value.year < 1600
            })
        },
        getInventorsNames: () => {
            return inventors.map(value => {
                if (value.year >= 1800 && value.year <= 1900) {
                    return value.first
                }
            }).filter(value => {
                return value
            })
        },
        getInventorsNamesAndSurnames: () => {
            return inventors.map(value => {
                return value.first.concat(' ' + value.last)
            })
        },
        getInventorsPassedYears: () => {
            return inventors.sort(((a, b) => {
                return (a.passed - a.year) - (b.passed - b.year)
            }))
        },
        getInventorsNamesLength: () => {
            return inventors.sort(((a, b) => {
                if (a.last > b.last) {
                    return 1
                }
                if (a.last < b.last) {
                    return -1
                }
            }))
        },
        getInventorSome: () => {
            return inventors.some(value => {
                return value.year === 1878
            })
        },
        getInventorsYearsOldSum: () => {
            return inventors.reduce((previousValue, currentValue) => {
                return previousValue + (currentValue.passed - currentValue.year)
            }, 0)
        }

    }
}

let inv = famousPeople();
console.log(inv.getInventorsCentury());
console.log(inv.getInventorsNames());
console.log(inv.getInventorsNamesAndSurnames());
console.log(inv.getInventorsPassedYears());
console.log('-=--=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-==-=-=');
console.log(inv.getInventorsNamesLength());
console.log('-=--=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-==-=-=');
console.log('-=--=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-==-=-=');
console.log(inv.getInventorSome());
console.log(inv.getInventorsYearsOldSum());
