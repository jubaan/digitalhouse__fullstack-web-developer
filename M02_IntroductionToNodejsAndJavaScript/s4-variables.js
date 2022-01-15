// Declare two variables "age" and "weight"

let age;
let weight;

// Declare two variables "age" and "weight" and assign them a numeric value
let age = 30;
let weight = 76;

// We want to avoid anyone from declaring the same variables that we've created.
// What could we change to help with this goal?

// Rewrite the next code:
var name;
var lastName;
var age;
var telephone;
var isDeveloper;

// Solution
let name;
let lastName;
let age;
let telephone;
let isDeveloper;

// We're going to validate that our poll respondents are between 18 and 99 years old. No one can change that age range, to prevent that we will declare and asign those values to two constants.
const MIN_AGE = 18;
const MAX_AGE = 99;