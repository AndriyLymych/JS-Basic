/* first */
let a = -3;
if (a === 0 || a === 1 || a === -3) {
    console.log(true);
} else {
    console.log(false);
}
/* second*/
let min = 0;
if (0 <= min && min <= 15) {
    console.log('first-part');
} else if (16 <= min && min <= 30) {
    console.log('second-part');
} else if (31 <= min && min <= 45) {
    console.log('third-part');
} else if (46 <= min && min <= 49) {
    console.log('fourth-part');
} else {
    console.log('error');
}
/* third*/
let c = 3;
let d = 5;
if (c <= 1 && d >= 3) {
    console.log(c + d);
} else {
    console.log(c - d);
}
/* fourth*/
let month = 1;
if (month >= 1 & month <= 2 || month === 12) {
    console.log('winter');
} else if (month >= 3 && month <= 5) {
    console.log('spring');
} else if (month >= 6 && month <= 8) {
    console.log('summer');
} else if (month >= 9 && month <= 11) {
    console.log('autumn');
} else {
    console.log(false);
}
/* fifth*/
let num = 1;
switch (num) {
    case 1 :
        console.log('winter');
        break;
    case 2 :
        console.log('spring');
        break;
    case 3 :
        console.log('summer');
        break;
    case 4 :
        console.log('autumn');
        break;
    default:
        console.log(false);
        break
}
/* sixth*/
let numb = 1;
switch (numb) {
    case 1 :
        console.log('january');
        break;
    case 2 :
        console.log('february');
        break;
    case 3 :
        console.log('march');
        break;
    case 4 :
        console.log('april');
        break;
    case 5 :
        console.log('may');
        break;
    case 6 :
        console.log('june');
        break;
    case 7 :
        console.log('july');
        break;
    case 8 :
        console.log('august');
        break;
    case 9 :
        console.log('september');
        break;
    case 10 :
        console.log('october');
        break;
    case 11 :
        console.log('november');
        break;
    case 12:
        console.log('december');
        break;
    default:
        console.log(false);
        break
}

/* seventh*/
let one = +prompt();
let two = +prompt();
let three = +prompt();
if (one < two & one < three && two < three) {
    console.log(one, two, three);

} else if (one < two && two > three && one < three) {
    console.log(one, three, two);

} else if (two < three && two < one && one < three) {
    console.log(two, one, three);

} else if (two < three && two < one && one > three) {
    console.log(two, three, one);

} else if (two > three && two > one && one > three) {
    console.log(three, one, two);

} else if (two > three && two < one && one > three) {
    console.log(three, two, one);

} else {
    console.log('error');

}
/* eighth*/

let state = prompt();
if (state==='green') {
    console.log('GO!');

} else if (state==='yellow') {
    console.log('WAIT!');

} else if (state==='red') {
    console.log('STOP!');

} else{
    console.log('do what you want!');

}


/* ninth*/

let color = prompt();
let road = confirm('Is road clear ?');

if (color==='green' && road) {
    console.log('go!!!');

} else if (color==='green' && !road) {
    console.log('wait, when road will be clean ');

} else if (color==='yellow' && !road) {
    console.log('wait!!!');

} else if (color==='yellow' && road) {
    console.log('still wait!');

} else if (color==='red'&& road) {
    console.log('still stay here!');

} else if (color==='red' && !road) {
    console.log('stay and wait!!!');

} else{
    console.log('do what you want');
}

