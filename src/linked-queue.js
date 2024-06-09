import ListNode from "./list-node.js";

/**
 * LinkedQueue class represents a queue using a linked list.
 * @class
 */
export class LinkedQueue {

    /**
     * @private
     * @type {ListNode|null}
     * Reference to the head (front) of the queue.
     */
    #head = null;

    /**
     * @private
     * @type {ListNode|null}
     * Reference to the tail (rear) of the queue.
     */
    #tail = null;

    /**
     * @private
     * @type {number}
     * Counter to keep track of the number of elements in the queue.
     */
    #counter = 0;

    /**
     * Adds an value to the end of the queue.
     * @param {*} value - The value to be added to the queue.
     */
    enqueue(value){
        const node = new ListNode(value);
        if (!this.#head){
            this.#head = node;
        } else {
            this.#tail.next = node;
        }
        this.#tail = node;
        this.#counter++; 
    }

    /**
     * Removes and returns the item at the front of the queue.
     * @returns {*} The item at the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    dequeue(){
        if (!this.#head){
            throw new Error('Cannot dequeue from an empty queue');
        }
        const value = this.#head.value;
        this.#head = this.#head.next;
        this.#counter--;
        return value;
    }

    /**
     * Returns the item at the front of the queue without removing it.
     * @returns {*} The item at the front of the queue.
     * @throws Will throw an error if the queue is empty.
     */
    peek(){
        if (!this.#head){
            throw new Error('Cannot peek at an empty queue');
        }

        return this.#head.value;
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, otherwise false.
     */
    get isEmpty(){
        return !this.#head;
    }

    /**
     * Gets the number of items in the queue.
     * @returns {number} The number of items in the queue.
     */
    get count(){
        return this.#counter;
    }
}
