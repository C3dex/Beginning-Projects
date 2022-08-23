let myAge = 19; // my age
let earlyYears = 2; // early years 
earlyYears *= 10.5;
let laterYears = myAge - 2; // substracted 2 from my age and made it a variable
laterYears *= 4; // multiplied the variable by 4 years to calculate the number of dog years accounted for by your later years. and used the multiplication assignment operator to multiply and assign in one step
let myAgeInDogYears = earlyYears + laterYears; // combined the early years and later years of dog years to convert to my age in dog years
let myName = 'Osama Aldossari'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
