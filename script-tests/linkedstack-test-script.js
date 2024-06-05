import { LinkedStack } from '../src/linked-stack.js';

export default function main(){

    const stack = new LinkedStack();


    // Test isEmpty
    console.log(`Is linked stack empty?: ${stack.isEmpty}`); // Expected: true

    console.log('\nPushing values onto the stack...\n');

    stack.push(15);
    stack.push(33);
    stack.push(9);

    console.log(`Is linked stack empty?: ${stack.isEmpty}`); // Expected: false
    console.log(`Current count: ${stack.count}`); // Expected: 3

    // Test peek
    console.log(`Top value: ${stack.peek()}`); // Expected: 3

    // Test pop
    console.log(`Popped value: ${stack.pop()}`); // Expected: 3
    console.log(`Popped value: ${stack.pop()}`); // Expected: 2
    console.log(`Current count: ${stack.count}`); // Expected: 1
    console.log(`Top value: ${stack.peek()}`); // Expected: 1

    // Test pop with last element
    console.log(`Popped value: ${stack.pop()}`); // Expected: 1
    console.log(`Is linked stack empty? ${stack.isEmpty}`); // Expected: true
    console.log(`Current count: ${stack.count}`); // Expected: 0

    // Test pop on empty stack (should throw an error)
    try {
        stack.pop();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Cant pop if stack is empty
    }

    // Test peek on empty stack (should throw an error)
    try {
        stack.peek();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Cant peek if stack is empty
    }
}
