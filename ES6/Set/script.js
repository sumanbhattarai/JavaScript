

// A Set object can be used to hold unique values (no repetitions are allowed).
// A value in a set can be anything (objects and primitive values). 

let setExample = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
// The size property returns the number of distinct values in a set.
console.log(setExample.size); // 5

let set = new Set();

set.add(5).add(9).add(59).add(5).add("9").add(12);

console.log(set.has(9)); // true

for (let v of set.values())
{
  console.log(v); //  5 9 59 9 12 
}