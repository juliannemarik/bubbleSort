function bubbleSort(unorderedArray, tracker = unorderedArray.length - 1) {
  if (tracker === 0 || tracker === -1){
    return unorderedArray;
  }
  for (let i = 0; i < tracker; i++) {
    compare(unorderedArray, i);
  }
  return bubbleSort(unorderedArray, --tracker);
}

function swap(i, unorderedArray) {
  [unorderedArray[i], unorderedArray[i + 1]] = [unorderedArray[i + 1], unorderedArray[i]];
  return unorderedArray;
}

function compare(unorderedArray, i) {
  if (unorderedArray[i] >= unorderedArray[i + 1]) {
    swap(i, unorderedArray);
  }
}
