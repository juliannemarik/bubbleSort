describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
  it('should not swap more than necessary', function() {
    bubbleSort([4, 1, 2, 39]);
    expect(swap.calls.count()).toEqual(2);
  });
  it('number of comparisons', function() {
    bubbleSort([4, 1, 2]);
    expect(compare.calls.count()).toEqual(3);
  });
  it('sorts multiple numbers', function() {
    expect(bubbleSort([4, 1, 3, 2, 0])).toEqual([0, 1, 2, 3, 4]);
  });
  it('handles an array with one item', function() {
    expect(bubbleSort([4])).toEqual([4]);
  });
});
