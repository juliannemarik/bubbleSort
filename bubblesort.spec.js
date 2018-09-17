describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('number of swaps on an array should be !(array.length-1)', function() {
    bubbleSort([4, 1, 2, 7234]);
    expect(swap.calls.count()).toEqual(6);
  });
  it('sorts multiple numbers', function() {
    expect(bubbleSort([4, 1, 3, 2, 0])).toEqual([0, 1, 2, 3, 4]);
  });
  it('handles an array with one item', function() {
    expect(bubbleSort([4])).toEqual([4]);
    expect(bubbleSort(['apple'])).toEqual(['apple']);
  });
  //   it('sorts multiple strings', function() {
  //     expect(bubbleSort(['dog', 'banana', 'apple', 'cat'])).toEqual([
  //       'apple',
  //       'banana',
  //       'cat',
  //       'dog',
  //     ]);
  //   });
  //   it('sorts an array with multiple data types', function() {
  //   expect(bubbleSort(['dog', 'banana', 1, 5, 17])).toEqual([]);
});
