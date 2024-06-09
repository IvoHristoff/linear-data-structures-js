import { LinkedList } from '../src/linked-list.js';

export default function main() {

    const list = new LinkedList();

    // Test addFirst
    console.log('Adding values to the beginning of the list...');
    list.addFirst(10);
    list.addFirst(20);
    list.addFirst(30);
    console.log('\nExpected list: 30 -> 20 -> 10');
    console.log('Actual list:', [...list].join(' -> ')); // Expected: 30 -> 20 -> 10

    // Test removeFirst
    console.log('\nRemoving the first element...');
    console.log('Removed value:', list.removeFirst()); // Expected: 30
    console.log('Expected list: 20 -> 10');
    console.log('Actual list:', [...list].join(' -> ')); // Expected: 20 -> 10

    // Test insertAfter
    const nodeWith20 = list.find(20);
    list.insertAfter(nodeWith20, 15);
    console.log('\nInserting 15 after 20...');
    console.log('Expected list: 20 -> 15 -> 10');
    console.log('Actual list:', [...list].join(' -> ')); // Expected: 20 -> 15 -> 10

    // Test removeAfter
    const nodeWith20Again = list.find(20);
    list.removeAfter(nodeWith20Again);
    console.log('\nRemoving the element after 20...');
    console.log('Expected list: 20 -> 10');
    console.log('Actual list:', [...list].join(' -> ')); // Expected: 20 -> 10

    // Test find
    console.log('\nFinding node with value 10...');
    const foundNode = list.find(10);
    console.log('Expected found node value: 10');
    console.log('Actual found node value:', foundNode ? foundNode.value : null); // Expected: 10

    // Test iteration
    console.log('\nIterating over list values...');
    console.log('Expected list: 20 -> 10');
    console.log('Actual list:', [...list].join(' -> ')); // Expected: 20 -> 10

    // Test edge cases
    console.log('\nTesting edge cases...');

    // Remove remaining elements
    list.removeFirst(); // Removes 20
    list.removeFirst(); // Removes 10

    // Try to remove from empty list
    try {
        list.removeFirst();
    } catch (error) {
        console.log('Expected error:', error.message); // Expected: List is empty, therefore can't remove anything.
    }

    // Test find on empty list
    console.log('\nFinding node with value 10 on an empty list...');
    const notFoundNode = list.find(10);
    console.log('Expected found node value: null');
    console.log('Actual found node value:', notFoundNode ? notFoundNode.value : null); // Expected: null

    // Test insertAfter on an empty list
    try {
        list.insertAfter(null, 5);
    } catch (error) {
        console.log('Expected error:', error.message); // Expected: Cannot read properties of null
    }
}
