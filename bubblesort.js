function bubbleSort (unorderedArray, tracker = unorderedArray.length - 1) {
  while(tracker >= 0) {
    for (let i = 0; i < tracker; i++){
      if (unorderedArray[i] > unorderedArray[i + 1]) {
        [unorderedArray[i], unorderedArray[i + 1]] = [unorderedArray[i + 1], unorderedArray[i]];
      }
    }
    tracker--;
    bubbleSort(unorderedArray, tracker);
    return unorderedArray;
  }
  return [];
}
