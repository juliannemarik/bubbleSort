function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  let splitIdx = Math.ceil(wholeArray.length / 2);
  return [wholeArray.slice(0, splitIdx), wholeArray.slice(splitIdx)];
}

function merge(arr1, arr2, mergedArr = []) {
  if (arr1.length === 0 || arr2.length === 0) {
    let lastArr = arr1.length ? arr1 : arr2;
    return mergedArr.concat(lastArr);
  } else {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
    return merge(arr1, arr2, mergedArr);
  }
}

function mergeSort() {
  if (sortedArr1[0] < sortedArr2[0]) {
  }
}
