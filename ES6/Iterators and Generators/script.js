
// Iterators & Generators

// Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.

let myIterableObj = { 
    [Symbol.iterator] : function* () {
      yield 1; yield 2; yield 3;
  ...
  console.log([...myIterableObj]);