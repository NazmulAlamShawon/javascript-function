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
