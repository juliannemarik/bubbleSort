let counter = 0;
let swapCounter = 0;

function bubbleSort(unorderedArray, tracker = unorderedArray.length - 1) {
  while (tracker >= 0) {
    for (let i = 0; i < tracker; i++) {
      compare(unorderedArray, i);
    }
    tracker--;
    bubbleSort(unorderedArray, tracker);
    return unorderedArray;
  }
  return [];
}

function swap(i, unorderedArray) {
  [unorderedArray[i], unorderedArray[i + 1]] = [
    unorderedArray[i + 1],
    unorderedArray[i],
  ];
  swapCounter++;
  return unorderedArray;
}

function compare(unorderedArray, i) {
  // console.log('hi');
  if (unorderedArray[i] >= unorderedArray[i + 1]) {
    swap(i, unorderedArray);
  }
  counter++;
}

// bubbleSort([4, 1, 2]);
// console.log(counter);
// console.log(swapCounter);
