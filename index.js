'use strict';
// function logger() {
// 	console.log('my name is shawon');
// }

// //calling//running/invoking
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = ` Juice with ${apples} apples and ${oranges} oranges`;
// 	return juice;
// }

// const appleOrangeJuice = fruitProcessor(5, 4);
// console.log(appleOrangeJuice);
// const num = Number('23');
// console.log(num);
// //  function declaration
// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }
// const age1 = calcAge1(1998);
// console.log(age1);

// // anonymouse function and function expression
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };
// const age2 = calcAge2(1989);
// console.log(age1, age2);

// // Arrow function
// const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearUntilRetiremnet = (birthYear, firsrtName) => {
// 	const age = 2037 - birthYear;
// 	const retiremnets = 65 - age;
// 	// return retiremnets;
// 	return `${firsrtName} retires in ${retiremnets} years`;
// };
// console.log(yearUntilRetiremnet(1989, 'Nazmul'));
// console.log(yearUntilRetiremnet(1992, 'Alam'));

// // recepi juices elemeents
// function cutFruitePicess(fruite) {
// 	return fruite * 4;
// }
// // cutFruitePicess er sathe ei fruitProcessor function ke add korte hobe
// function fruitProcessor(apples, oranges) {
// 	//  connection with cutFruitePicess and add with parameters
// 	//  capture parameters other functions
// 	const applePieces = cutFruitePicess(apples);
// 	const orangesPieces = cutFruitePicess(oranges);
// 	// invoke function outer capture function with parameters
// 	const juice = `Juice with ${applePieces} apples and $ ${orangesPieces} oranges.`;
// 	return juice;
// }
// console.log(fruitProcessor(2, 3));
// //another data structure object
// const nazmulArray = ['Nazmul', 'Alam', 'teacher', ['nanziba', 'topu', 'abdullah']];

// const nazmuls = {
// 	firsrtName: 'nazmuls',
// 	lastName: 'alam',
// 	age: 2023 - 1989,
// 	job: 'teacher',
// 	friends: ['rubels', 'rakib', 'istiak', 'kanon', 'rabbi'],
// };
// console.log(nazmuls.job);
// console.log(nazmuls.firsrtName);
// console.log(nazmuls.age);
// const nameKey = 'Name';
// // dot notation capture real final properties names
// //  exmaple: console.log(nazmuls.lastName);

// console.log(nazmuls['first' + nameKey]);
// console.log(nazmuls['last' + nameKey]);

// // const intertestIn = prompt('What do you want to know about shawon?');
// // console.log(nazmuls[intertestIn]);
// if (nazmuls[intertestIn]) {
// 	console.log(nazmuls[intertestIn]);
// } else {
// 	console.log('wrontg request');
// }
// nazmuls.location = 'Bangladesh';
// nazmuls['twitter'] = '@nazmultoAlam';
// console.log(nazmuls);

// console.log(`${nazmuls.firsrtName} has ${nazmuls.friends.length}, and best friend is ${nazmuls.friends[0]}`);

// //  challange
// const mark = {
// 	fullName: 'Nazmul Alam',
// 	mass: 52,
// 	height: 1.69,
// 	calBMI: function () {
// 		this.bmi = this.mass / this.height ** 2;
// 		return this.bmi;
// 	},
// };
// const john = {
// 	fullName: 'John smith',
// 	mass: 92,
// 	height: 1.95,
// };
// mark.calBMI();
// console.log(mark.bmi);

// const nazmulsArray=[
// 	'nazmul',
// 	'alam',
// 	2037-1989,
// 	'teacher',
// 	['Micheal','Peter','Steven']
// ];

// for (let i = 0; ; i++){
// 	console.log(nazmulsArray[0]);

// }
const restaurent = {
	name: 'kacchi vai',
	location: 'm.m hosaain road',
	categories: ['kabab', 'birani', 'dessert'],
	startMenu: ['jali kabab', 'haidarabadi birani', 'faluda'],
	mainMenu: ['birani', 'drinks', 'misty'],
	order: function (startMenu, mainMenu) {
		return [this.startMenu[startMenu], this.mainMenu[mainMenu]];
	},
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
let [mainMenu, secondary] = restaurent.categories;
console.log(mainMenu, secondary);

const temp = mainMenu;
mainMenu = secondary;
secondary = temp;
console.log(mainMenu, secondary);
const [startter, mainCourse] = restaurent.order(2, 0);
console.log(startter, mainCourse);

//  ... spreade operator copy data from array and add data
//  copy array
//  joim 2 array

// Iterables: arrays,string,map,set NOT objects

//  array vs stes
//  when we are use order list values and duplicate values
// data manupulation
// sets
// Use for unique values
//  Use high performance
//  Use remove duplicates
// objects vs maps
// traditional way to store value
// easier writen access values
// MAPS
// better performance
// key can have any data type
// easy to iterate
// easy to compute size

const bookings = [];
const createBooking = function (flghtNum, numPaasengers=1, price=199) {
	
	const booking = {
		flghtNum,
		numPaasengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking('LH123', 'Nazmul Alam',);
createBooking('LH12', 'Nazmul Alam',);
