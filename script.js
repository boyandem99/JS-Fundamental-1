
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log(40);
console.log("Jonas");

let firstName = "Matt";

console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 3.1514;

let myFirstJob="coder";
let myCurrentJob="teacher";

let job1="coder";
let job2="teacher";

console.log(myFirstJob);

//Variable name conventions

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "23");

javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = "Thien";
console.log(lastName);


// Math operators
const now = 2023;
const ageThien = now - 2003;
const ageJohn = now - 2000;
console.log(ageThien, ageJohn);
console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 *2

const firstName = 'Than';
const lastName = 'Thien';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;// 15
x += 10; // x = x + 10
x *= 4; //x = x * 4
x++; // x = x + 1
x--; //x = x - 1
console.log(x);

// Comparison operators
console.log(ageJohn > ageThien); // >, <, >=, <=
console.log(ageThien >= 18);

const isFullAge = ageThien >= 18;

console.log(now - 2000 > now - 2003)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//Coding challenge #1

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
console.log(markBMI, johnBMI);
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year olds ${job}!`;
console.log(jonasNew);

console.log(`Just a string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 15;


if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Coding challenge #2

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
//console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher then John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher then Mark's BMI (${markBMI})`);

}

// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`23` + `10` + 3);
console.log(`23` / `2`);

let n = '1' + 1;// '11'
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job!`);
}

let height = 10;
if (height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is undefined`);
}


const age = '18';
if (age === 18) console.log(`You just became an adult :D (strict)`);

if (age == 18) console.log(`You just became an adult :D (loose)`);
const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) {  //23 === 23
    console.log(`Cool! 23 is an amazing number!`)
} else if (favourite === 7) {
    console.log(`7 is also an cool number`);
} else if (favourite === 9) {
    console.log(`9 is also an cool number`);
} else {
    console.log(`Number is not an 23 or 7`);
}

if (favourite !== 23) console.log(`Why not 23?`);


const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


// if (hasDriverLicense && hasGoodVision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = false; //
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}


// const day = `friday`;
// switch (day) {
//     case `monday`: // day === `monday`
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup`);
//         break;
//     case `tuesday`:
//         console.log(`Prepare theory videos`);
//         break;
//     case `wednesday`:
//     case `thursday`:
//         console.log(`Write code examples`);
//         break;
//     case `friday`:
//         console.log(`Record videos`);
//         break;
//     case `saturday`:
//     case `sunday`:
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');

// }

const day = `monday`;
if (day === `monday`) {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === `tuesday`) {
    console.log(`Prepare theory videos`);
} else if (day === `wednesday` || day === `thursday`) {
    console.log(`Write code examples`);
} else if (day === `friday`) {
    console.log(`Record videos`);
} else if (day === `saturday` || day === `sunday`) {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}


3 + 5
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}
const me = `Thien`;
console.log(`I'm ${2022 - 2003} years old ${me}`);

const age = 19;
age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);
const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

*/

//Coding challenge #4
let tip;
const bill = 275;
bill >= 50 && bill <= 300 ? tip = bill / 100 * 15 : tip = bill / 100 * 20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);