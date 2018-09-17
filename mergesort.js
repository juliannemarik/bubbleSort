function split (wholeArray) {
  if (wholeArray.length === 1){
    return wholeArray;
  }
  let splitIdx = Math.ceil((wholeArray.length)/2);
  return [wholeArray.slice(0, splitIdx), wholeArray.slice(splitIdx)]
}

function merge () {

}

function mergeSort() {

}

split([1,2,3,4]);
