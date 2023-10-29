class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
const stack = new Stack();
// checking to see if stack is empty
console.log(stack.isEmpty());
// Adding elements to the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Printing the stack element
// prints [1, 2, 3]
console.log("printing stack");
var str = "";
for (var i = 0; i <= stack.items.length - 1; i++) {
  str = str + stack.items[i] + " ";
}
console.log(str);

// returns 3
console.log("Peek = " + stack.peek());

// removes 3 from stack
stack.pop();

// returns [1, 2]
console.log("printing stack after pop");
str = "";
for (var i = 0; i <= stack.items.length - 1; i++) {
  str = str + stack.items[i] + " ";
}
console.log(str);
