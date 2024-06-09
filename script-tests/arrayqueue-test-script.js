import { ArrayQueue } from '../src/array-queue.js';

export default function main() {

    const queue = new ArrayQueue();

    // Test isEmpty
    console.log(`Is array queue empty?: ${queue.isEmpty()}`); // Expected: true

    console.log('\nEnqueuing values onto the queue...\n');

    queue.enqueue(22);
    queue.enqueue(863);
    queue.enqueue(7);

    console.log(`Is queue empty?: ${queue.isEmpty()}`); // Expected: false
    console.log(`Current count: ${queue.count}`); // Expected: 3

    // Test peek
    console.log(`Front value: ${queue.peek()}`); // Expected: 22

    // Test dequeue
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 22
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 863
    console.log(`Current count: ${queue.count}`); // Expected: 1
    console.log(`Front value: ${queue.peek()}`); // Expected: 7

    // Test dequeue with last element
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 7
    console.log(`Is queue empty?: ${queue.isEmpty()}`); // Expected: true
    console.log(`Current count: ${queue.count}`); // Expected: 0

    // Test dequeue on empty queue (should throw an error)
    try {
        queue.dequeue();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Queue is empty
    }

    // Test peek on empty queue (should throw an error)
    try {
        queue.peek();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Queue is empty
    }
}
