describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1])).toEqual([1]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([2, 4], [3, 5])).toEqual([2, 3, 4, 5]);
    expect(merge([9], [5, 7])).toEqual([5, 7, 9]);
    expect(merge([3, 6, 14], [3, 6])).toEqual([3, 3, 6, 6, 14]);
  });
});

describe('mergeSort function', function() {
  it('can sort a single index array', function() {
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([7423])).toEqual([7423]);
  });
  it('can sort an unsorted array', function() {
    expect(mergeSort([1, 293, 42, 24])).toEqual([1, 24, 42, 293]);
    expect(mergeSort([-3, 17, 13, 7, 83, 44])).toEqual([-3, 7, 13, 17, 44, 83]);
  });
  it('can handle negative values', function() {
    expect(mergeSort([-134, -3, 0, -17, 30, -9])).toEqual([
      -134,
      -17,
      -9,
      -3,
      0,
      30,
    ]);
  });
  it('can handle duplicate values in an unsorted array', function() {
    expect(mergeSort([42, 42, 1, 62, 37])).toEqual([1, 37, 42, 42, 62]);
    expect(mergeSort([33, 49, 33, 82, 74, 72, 74])).toEqual([
      33,
      33,
      49,
      72,
      74,
      74,
      82,
    ]);
  });
});
