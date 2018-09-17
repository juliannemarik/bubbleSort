function bubbleSort(unorderedArray, tracker = unorderedArray.length - 1) {
  while (tracker >= 0) {
    for (let i = 0; i < tracker; i++) {
      swap(i, unorderedArray);
    }
    tracker--;
    bubbleSort(unorderedArray, tracker);
    return unorderedArray;
  }
  return [];
}

function swap(i, unorderedArray) {
  if (unorderedArray[i] >= unorderedArray[i + 1]) {
    [unorderedArray[i], unorderedArray[i + 1]] = [
      unorderedArray[i + 1],
      unorderedArray[i],
    ];
  }
  return unorderedArray;
}
