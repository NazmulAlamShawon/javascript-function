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
