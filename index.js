function logger() {
	console.log('my name is shawon');
}

//calling//running/invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = ` Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleOrangeJuice = fruitProcessor(5, 4);
console.log(appleOrangeJuice);
const num = Number('23');
console.log(num);
//  function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

// anonymouse function and function expression
const calcAge2 = function (birthYear) {
	return 2037 - birthYear;
};
const age2 = calcAge2(1989);
console.log(age1, age2);

// Arrow function
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);

const yearUntilRetiremnet = (birthYear, firsrtName) => {
	const age = 2037 - birthYear;
	const retiremnets = 65 - age;
	// return retiremnets;
	return `${firsrtName} retires in ${retiremnets} years`;
};
console.log(yearUntilRetiremnet(1989, 'Nazmul'));
console.log(yearUntilRetiremnet(1992, 'Alam'));

// recepi juices elemeents
function cutFruitePicess(fruite) {
	return fruite * 4;
}
// cutFruitePicess er sathe ei fruitProcessor function ke add korte hobe
function fruitProcessor(apples, oranges) {
	//  connection with cutFruitePicess and add with parameters
	//  capture parameters other functions
	const applePieces = cutFruitePicess(apples);
	const orangesPieces = cutFruitePicess(oranges);
	// invoke function outer capture function with parameters
	const juice = `Juice with ${applePieces} apples and $ ${orangesPieces} oranges.`;
	return juice;
}
console.log(fruitProcessor(2, 3));
//another data structure object
const nazmulArray = ['Nazmul', 'Alam', 'teacher', ['nanziba', 'topu', 'abdullah']];

const nazmuls = {
	firsrtName: 'nazmuls',
	lastName: 'alam',
	age: 2023 - 1989,
	job: 'teacher',
	friends: ['rubels', 'rakib', 'istiak', 'kanon', 'rabbi'],
};
console.log(nazmuls.job);
console.log(nazmuls.firsrtName);
console.log(nazmuls.age);
const nameKey = 'Name';
// dot notation capture real final properties names
//  exmaple: console.log(nazmuls.lastName);

console.log(nazmuls['first' + nameKey]);
console.log(nazmuls['last' + nameKey]);

const intertestIn = prompt('What do you want to know about shawon?');
console.log(nazmuls[intertestIn]);
