
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

// Object.assign() in ES6

// ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object.
// Object.assign() is also useful for creating a duplicate of an existing object.

let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
  };
  let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
  };
  let newStudent = Object.assign({}, person, student); 
  console.log(newStudent); // {name:'Bob' , age:20 , sex:'male' , xp: '2'}

  // Order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on.


  let info = {
    name: 'Jack',
    age: 18
  };
  
  let newPerson = info; //  newPerson references person
  newPerson.name = 'Bob'; 
  
  console.log(info.name); // Bob
  console.log(newPerson.name); // Bob

 // To avoid this (mutations), use Object.assign() to create a new object.

let info2 = {
  name: 'Jack',
  age: 18
};

let newPerson2 = Object.assign({}, info2); 
// OR , let newPerson = Object.assign({}, info2 , {name: 'Bob'});
newPerson2.name = 'Bob';

console.log(info2.name); // Jack
console.log(newPerson2.name); // Bob