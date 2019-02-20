'use strict';

function max(numbers){
  if (numbers.length === 0){
    return undefined;
  }

  let i = 0;
  let currentMax = 0;
  while (i < numbers.length) {
    if (currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

function min(numbers){
  if (numbers.length === 0){
    return undefined;
  }
  let i = 0;
  let currentMin = 0;

  while (i < numbers.length){
    if (currentMin > numbers[i]){
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

function average(numbers) {
  let total = 0;
  numbers.forEach(number => total += number);
  return total / numbers.length;
}


function repeat(fn, n){
  for (let i = 0; i < n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}


function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function arr(nam) {
  if (nam[0] === 'R') {
    return true;
  }
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);

    let tim = 'times';
    if (warningCounter === 1) {
      tim = 'time';
    }
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${tim} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the road');
const treesOnTracks = hazardWarningCreator('Trees on tracks!');
const icyRoad = hazardWarningCreator('Icy road!');

rocksWarning('Main St and Pacific Ave');
