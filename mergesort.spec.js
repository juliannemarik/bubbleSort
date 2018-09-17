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
