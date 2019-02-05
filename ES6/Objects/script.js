
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


