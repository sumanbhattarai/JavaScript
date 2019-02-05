
// ES6 introduces shorthand notations and computed property names that make declaring and using objects easier to understand.

let tree = {
    height: 10,
    color: 'green',
    grow() {
      this.height += 2;
    }
  };
  tree.grow();
  console.log(tree.height); // 12



// Computed Property Names

// With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).

let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
  [prop]: 'Jack',
  [`user_${id}`]: `${mobile}`
};

console.log(user);


// Another Example

var i = 0;
var a = {
  ['foo' + ++i]: i,
  ['foo' + ++i]: i,
  ['foo' + ++i]: i
};

console.log(a);

// Another Example

var param = 'size';
var config = {
  [param]: 12,
  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};
console.log(config);

// Note : It is very useful when you need to create custom objects based on some variables.