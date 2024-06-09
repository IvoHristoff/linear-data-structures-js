/**
 * Queue class represents a queue data structure using an array.
 * @class
 */
export class Queue {

    /**
     * @private
     * @type {Array}
     * An array to store the items in the queue.
     */
    #items = [];

    /**
     * Adds an item to the end of the queue.
     * @param {*} value - The value to be added to the queue.
     */
    enqueue(value){
        this.#items.push(value);
    }

    /**
     * Removes and returns the item at the front of the queue.
     * @returns {*} The item at the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    dequeue(){
        if (this.isEmpty()){
            throw new Error('Queue is empty');
        }
        // this is functional, but has O(n) complexity
        return this.#items.shift();
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} The item at the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    peek(){
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.#items[0];
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, otherwise false.
     */
    isEmpty(){
        return this.#items.length === 0;
    }

    /**
     * Gets the number of items in the queue.
     * @returns {number} The number of items in the queue.
     */
    get count(){
        return this.#items.length;
    }

}
