'use strict';

function max(numbers){
  let i = 0;
  let currentMax = 0;
  while (i < numbers.length) {
    if (currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}

function min (numbers){
  if (numbers.length == 0){
    return undefined;
  }

}