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