/*
const country = "Viet Nam";
let myPopulation = 97;
myPopulation = 97.5;
const continent = "Asia";

console.log(country, myPopulation, continent);
const isIsland = false;
const language = "Vietnamese";
console.log(isIsland, country, myPopulation, language);

const halfPopulation = myPopulation / 2;

myPopulation++;
console.log(myPopulation);
const finlandPopulation = 6;
myPopulation > finlandPopulation;
const averagePop = 33;
myPopulation > averagePop;

const description = `${country} is in ${continent} and it's ${myPopulation} million people speak ${language}`
console.log(description);

if (myPopulation > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${averagePop - myPopulation} milion below average`)
}

const a = '9' - '5';    // 4
const b = '19' - '13' + '17';   // '617'
const c = '19' - '13' + 17; // 23
const d = '123' < 57;    // 123 < 57 false
const e = 5 + 6 + '4' + 9 - 4 - 2; // 1143
console.log(a, b, c, d, e);



// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
// if (numNeighbours === 1) {
//     console.log(`Only 1 border!`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border!`);
// } else {
//     console.log(`No borders`);
// }


if (language === "English" && !isIsland && myPopulation < 50) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet you criteria :(`);
}


// Coding challenge #3
const dolphinsFirstScore = 97;
const dolphinsSeccondScore = 112;
const dolphinsThirdScore = 80;

const koalasFirstScore = 109;
const koalasSeccondScore = 95;
const koalasThirdScore = 100;

const minimumScore = 100;

const averageDolphinsScore = (dolphinsFirstScore + dolphinsSeccondScore + dolphinsThirdScore) / 3;
const averageKoalasScore = (koalasFirstScore + koalasSeccondScore + koalasThirdScore) / 3;

if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= minimumScore) {
    console.log(`Dolphins win`);
} else if (averageDolphinsScore < averageKoalasScore && averageKoalasScore >= minimumScore) {
    console.log(`Koalas win`);
} else if (averageDolphinsScore < minimumScore && averageKoalasScore < minimumScore) {
    console.log(`No winner`);
} else {
    console.log(`Draw`);
}


const language = `hindi`;

switch (language) {
    case `chinese`:
    case `mandarin`:
        console.log(`MOST number of native speakers!`);
        break;
    case `spanish`:
        console.log(`2nd place in number of native speakers!`);
        break;
    case `english`:
        console.log(`3rd place`);
        break;
    case `hindi`:
        console.log(`Number 4`);
        break;
    case `arabic`:
        console.log(`5th most spoken language`);
        break;
    default:
        console.log(`Great language too :D`);
}   


myPopulation > 33 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`);

console.log(`${country}'s population is ${myPopulation > 33 ? `above` : `below`} average`);
*/

// PART 2

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return description;
}

const vietNam = describeCountry(`Viet Nam`, 97, `Ha Noi`);
console.log(vietNam);


