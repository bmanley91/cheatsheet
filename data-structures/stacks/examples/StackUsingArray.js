const stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
console.log(`Stack: ${stack}`);

let popped = stack.pop();
console.log(`Popped Value: ${popped}`);
