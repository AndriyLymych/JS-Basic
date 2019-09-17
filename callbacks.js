function calculator(a, b, action, cb) {
    return cb(a, b, action)
}


let calc = calculator(15, 3, "/", (a, b, action) => {
    if (action === '+') {
        return a + b
    }
    if (action === '-') {
        return a - b
    }
    if (action === '*') {
        return a * b
    }
    if (action === '/') {
        return a / b
    } else {
        console.error('wrong action!')
    }

});


console.log(calc);


function room(status, reward, cb) {
    if (status) {
        return cb(null, reward)
    } else {
        return cb(console.error(`do your work and get ${reward}!`), null)
    }
}

let room1 = room(true, '100 points', (err, data) => {
    if (err) {
        return err
    } else {
        return data
    }
});
console.log(room1);


function writer(text,cb) {
    if (text){
        return cb( null, text)
    }else {
       return  cb('err', null)
    }
}
let writer1 = writer(['hello',2,2],(err, data)=>{
    if (data){
        return  data
    }else {
       throw new Error('enter text')
    }
});
console.log(writer1);


function homework(status,prize,cb) {
    if (status){
     return    cb(null,prize)
    } else {
      return   cb('err',null)
    }
}
let homework1 = homework(false,'great job',(err, prize)=>{
   if (!err){
       return prize
   } else {
       console.error('bad deal...')
   }
});
console.log(homework1);


function classroom(homework,mark,cb) {
    if (homework){
       return  cb(null,mark)
    }else {
       return  cb('bad mark', null)
    }
}

let classroom1 = classroom(true,5,(err, mark)=>{
    if(mark){
        return mark
    } else {
        throw new Error(`Go, study and next you get 5`)
    }
});
console.log(classroom1);
function market(money,price,car,cb) {
    if (money>price){
        return cb(null,car)
    } else {
        return  cb('err',null)
    }
}
let market1 = market(200,100,'bmw',(err, data)=>{
    if (data){
        return `congratulations, you get ${data}`
    } else {
        throw new Error('you have not money ')
    }
});
console.log(market1);



















