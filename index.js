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
