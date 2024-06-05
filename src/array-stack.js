/**
 * Stack implementation using an array.
 * @class
 */
export class ArrayStack {
    
    /**
     * @private
     * @type {Array}
     */
    #items = [];

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
        this.#items.push(value)
        this.#counter++;
    }

    /**
     * Pops a value from the stack.
     * @returns {*} The value that was popped from the stack.
     * @throws {Error} If the stack is empty.
     */
    pop() {
        if (this.isEmpty) {
            throw new Error('Cannot pop if stack is empty');
        }
        this.#counter--;
        return this.#items.pop();
    }

    /**
     * Peeks at the top value of the stack without removing it.
     * @returns {*} The value at the top of the stack.
     * @throws {Error} If the stack is empty.
     */
    peek(){
        if (!this.#items){
            throw new Error('Cant peek if stack is empty')
        }

        return this.#items[this.#items.length - 1];
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} True if the stack is empty, false otherwise.
     */
    get isEmpty(){
        return this.#items.length === 0;
    }

    /**
     * Gets the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    get count(){
     return this.#counter;   
    }

}