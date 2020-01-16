/**********
*Hello
*I'm Justin Lee
*I will become the greatest Pokemon Trainer
***********/

/*
var firstName = 'Justin';
console.log(firstName);

var lastName = 'Lee';
var age = 26;

var fullAge = true;
console.log(fullAge);

// Variable Naming Rules
var job = 'SEO Specialist';
console.log(job);
*/


/*
var firstName = 'Justin';
var age = 28;


// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Edelman Account Manager';
isMarried = false;

console.log (firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName) 

*/


/*******************
* Basic Operators


var now, yearJustin, yearMandip;

now = 2019;
ageJustin = 26;
ageMandip = 44;

//Math operators
yearJustin = now - 26;
yearMandip = now - 44;

console.log(yearJustin);

console.log (now + 2);
console.log (now * 2);
console.log (now / 10);

//Logical operators
var justinOlder = ageJustin < ageMandip;
console.log(justinOlder);


// typeof operator
console.log(typeof justinOlder);
console.log(typeof ageMandip);
console.log(typeof 'Mandip is older than Justin');
var x;
console.log(typeof x);

*/



/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log (x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);

*/

/*****
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.95; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log (BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI Higher Than John\'s? ' + markHigherBMI);

****/



/******
*If / else statements
*/

/***

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
	console.log(firstName + ' is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}


var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92; // kg
var heightJohn = 1.95; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
	console.log('Mark\' BMI is Higher than John\'s');
} else {
	console.log('John\' BMI is Higher than Mark\'s');
}

//var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\'s BMI Higher Than John\'s? ' + markHigherBMI);




/**************
* Boolean Logic
*/

/**********

var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){ //between 13 and 20 === age >= 13 AND age <20
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log (firstName + ' is a Young Man.');
} else {
	console.log(firstName + ' is a man.');
}


***********/

/**************************
* The Ternary Operator and Switch Statements


var firstName = 'John';
var age = 16;


// Ternary operator
age >=18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*

if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}

*/


/****************************************************************

// Switch Statement
var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an Uber in Lisbon.');
		break;
	case 'designer':
		console.log(firstName + ' designs websites.');
		break;
	default:
		console.log(firstName + ' does something else.');
}


age = 35;

switch (true) {
	case age < 13:
		console.log(firstName + ' is a boy');
		break;
	case age >=13 && age <20:
		console.log(firstName + ' is a teenager');
		break;
	case age >=20 && age <30:
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}



var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20){ //between 13 and 20 === age >= 13 AND age <20
	console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
	console.log (firstName + ' is a Young Man.');
} else {
	console.log(firstName + ' is a man.');
}


*******************************************************/




/*******************************************************
* Truthy and Falsy Values and Equality Operators


// falsy values: underfined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 0;

if (height || height === 0) {
	console.log('Variable is defined.');
} else {
	console.log ('Variable Has Not Been Defined.');
}

//Equaltiy operators
if (height == '23') {
	console.log('The == operator does type coercion!');
}

== and === difference is that if you were to compare string to a number,
== will allow 23 and '23' to be the same. Strict coercion which is === however would not.

******************************************************************************************/



/***************************************
* CODING CHALLENGE 2
*/

/***************************************

var JohnTeamAVG = (89 + 120 + 103) / 3
var MikeTeamAVG = (116 + 94 + 123) / 3
var MaryTeamAVG = (97 + 134 + 105) / 3

console.log (JohnTeamAVG, MikeTeamAVG, MaryTeamAVG)


if (JohnTeamAVG > MikeTeamAVG && JohnTeamAVG > MaryTeamAVG)
{
console.log('John\'s Team Had a Higher Score at ' + JohnTeamAVG + ' points');
} 


else if (MikeTeamAVG > JohnTeamAVG && MikeTeamAVG > MaryTeamAVG)
{
console.log('Mike\'s Team Had a Higher Score at ' + MikeTeamAVG + ' points');	
} 


else if (MaryTeamAVG > JohnTeamAVG && MaryTeamAVG > MikeTeamAVG)
{
console.log('Mary\'s Team Had a Higher Score at ' + MaryTeamAVG + ' points');	

} else {
	console.log('There is a draw.');

}


/*
if (JohnTeamAVG > MikeTeamAVG) {
	console.log('John\'s Team Had a Higher Score at ' + JohnTeamAVG + ' points');
} else if (MikeTeamAVG > JohnTeamAVG) {
	console.log ('Mike\'s Team Had a Higher Score at ' + MikeTeamAVG + ' points.');
} else {
	console.log('There is a draw');
}

*************************************************/



/******************************************************
* Functions
*/

/*

function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge (1969);

console.log(ageJohn, ageMike, ageJane);



function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {
	console.log(firstName + ' retires in ' + retirement + ' years.');
} else {
	console.log (firstName + ' is already retired.')
}

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/



/***********************************
* Function Statements and Expressions
*/


// Function declaration
//function whatDoYouDo (job, firstName) {}


// Function expression

/*****************************************************************
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher' && 'instructor':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives Uber';
		case 'designer':
			return firstName + 'designs beautiful websites';
		default:
			return firstName + ' does something else';
	}
	
}

console.log(whatDoYouDo('instructor', 'John'));


**********************************************************************/


/******************************************************************
* Arrays
*/


/******************************************************************
// Initiate new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); 
john.unshift('Mr.');

console.log(john);

john.pop()
john.pop()
john.shift()
console.log(john);

console.log(john.indexOf(23));


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';

console.log(isDesigner);


*****************************************************************/

/*************************************************
* PROJECT 3
*


function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = 0.2;

	} else if (bill > 50 && bill <200) {
		percentage = 0.15;
	} else {
		percentage =.1;
	}
	return percentage * bill;

}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), 
			tipCalculator(bills[1]), 
			tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
				   bills[1] + tips [1],
				   bills [2] + tips [2]];



console.log(tips, finalValues);


****************************************************/

/***************************************************
* OBJECTS AND PROPERTIES
*/


/***********

//Object literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher', 
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName'])
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);



// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

************/

/*********************************
* Objects and Methods
**/

/************************************************

var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher', 
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

john.calcAge();
console.log(john);

**************************************************/


/*************************************************
PROJECT 4

var john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
	console.log('They have the same BMI');
}


*/

/***************************************************************
* LOOPS AND ITERATION
*/


//Automate repetitive tasks by using loops

for (var i = 1; i <= 20; i += 2) {
	console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log 1 to console, i++
//....
// i = 9, 1 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


/*


//For Loop
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}



//While Loop
var i = 0;
while(i < john.length) {
	console.log(john[1]);
	i++;
}


*/

// continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}


// Looping Backwards
for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}