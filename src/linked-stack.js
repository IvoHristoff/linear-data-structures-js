import ListNode from './list-node.js';

/**
 * Stack implementation using linked list.
 * @class
 */
export class LinkedStack {

     /**
     * @private
     * @type {ListNode|null}
     */
    #top = null;

    /**
     * @private
     * @type {number}
     */
    #counter = 0;

    /**
     * Pushes a value onto the stack.
     * @param {*} value - The value to be pushed onto the stack.
     */
    push(value){
        const node = new ListNode(value);
        node.next = this.#top;
        this.#top = node;
        this.#counter++;
    }

    /**
     * Pops a value from the stack.
     * @returns {*} The value that was popped from the stack.
     * @throws {Error} If the stack is empty.
     */
    pop(){
        if (!this.#top){
            throw new Error('Cant pop if stack is empty');
        }
        const value = this.#top;
        this.#top = this.#top.next;

        this.#counter--;
        return value.value;
    }

    /**
     * Peeks at the top value of the stack without removing it.
     * @returns {*} The value at the top of the stack.
     * @throws {Error} If the stack is empty.
     */
    peek(){
        if (!this.#top){
            throw new Error('Cant peek if stack is empty');
        }

        return this.#top.value;
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    get isEmpty(){
        return !this.#top;
    }

    /**
     * Gets the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    get count(){
     return this.#counter;   
    }

}