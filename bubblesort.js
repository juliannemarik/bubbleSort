// Function: bubbleSort()
// ----------------------
// Purpose: the bubbleSort function implements a bubble sort on an input array,
// returning a sorted array
function bubbleSort(unorderedArray, tracker = unorderedArray.length - 1) {
  if (tracker === 0 || tracker === -1){
    return unorderedArray;
  }
  for (let i = 0; i < tracker; i++) {
    compare(unorderedArray, i);
  }
  return bubbleSort(unorderedArray, --tracker);
}

// Function: swap()
// -----------------
// Purpose: the swap function swaps two elements in an array based on
// the bubble sort implementation
function swap(i, unorderedArray) {
  [unorderedArray[i], unorderedArray[i + 1]] = [unorderedArray[i + 1], unorderedArray[i]];
  return unorderedArray;
}

// Function: compare()
// -------------------
// Purpose: the compare function compares the magnitude of two values in an array
function compare(unorderedArray, i) {
  if (unorderedArray[i] >= unorderedArray[i + 1]) {
    swap(i, unorderedArray);
  }
}
