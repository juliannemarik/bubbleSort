
// Function: mergeSort()
// ---------------------
// Purpose: the mergeSort function implements a merge sort on an input array,
// returning a sorted array
function mergeSort(array) {
  if (array.length === 1){
    return array;
  }
  let splitArray = split(array);
  let arrayLeft = splitArray[0];
  let arrayRight = splitArray[1];

  return merge(mergeSort(arrayLeft), mergeSort(arrayRight));
}

// Function: split()
// -------------------
// Purpose: the split function takes an array and splits it down the middle
// into two arrays
function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let splitIdx = Math.ceil(wholeArray.length / 2);
  return [wholeArray.slice(0, splitIdx), wholeArray.slice(splitIdx)];
}

// Function: merge()
// -------------------
// Purpose: the merge function takes two sorted arrays and merges them into
// a single sorted array
function merge(arr1, arr2, mergedArr = []) {
  if (arr1.length === 0 || arr2.length === 0) {
    let lastArr = arr1.length ? arr1 : arr2;
    return mergedArr.concat(lastArr);
  } else {
    if (arr1[0] < arr2[0]) mergedArr.push(arr1.shift());
    else mergedArr.push(arr2.shift());
    return merge(arr1, arr2, mergedArr);
  }
}
