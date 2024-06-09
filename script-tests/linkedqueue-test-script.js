import { LinkedQueue } from '../src/linked-queue.js';

export default function main() {

    const queue = new LinkedQueue();

    // Test isEmpty
    console.log(`Is linked queue empty?: ${queue.isEmpty}`); // Expected: true

    console.log('\nEnqueuing values onto the queue...\n');

    queue.enqueue(45);
    queue.enqueue(78);
    queue.enqueue(4);

    console.log(`Is linked queue empty?: ${queue.isEmpty}`); // Expected: false
    console.log(`Current count: ${queue.count}`); // Expected: 3

    // Test peek
    console.log(`Front value: ${queue.peek()}`); // Expected: 45

    // Test dequeue
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 45
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 78
    console.log(`Current count: ${queue.count}`); // Expected: 1
    console.log(`Front value: ${queue.peek()}`); // Expected: 4

    // Test dequeue with last element
    console.log(`Dequeued value: ${queue.dequeue()}`); // Expected: 4
    console.log(`Is linked queue empty?: ${queue.isEmpty}`); // Expected: true
    console.log(`Current count: ${queue.count}`); // Expected: 0

    // Test dequeue on empty queue (should throw an error)
    try {
        queue.dequeue();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Cannot dequeue from an empty queue
    }

    // Test peek on empty queue (should throw an error)
    try {
        queue.peek();
    } catch (error) {
        console.log(`Error: ${error.message}`); // Expected: Cannot peek at an empty queue
    }
}
