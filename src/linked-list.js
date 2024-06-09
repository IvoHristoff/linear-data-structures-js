import ListNode from './list-node.js';

/**
 * LinkedList class represents a singly linked list data structure.
 * @class
 */
export class LinkedList {
    /**
     * @private
     * @type {ListNode|null}
     * The head of the linked list.
     */
    #head = null;

    /**
     * @private
     * @type {number}
     * The counter to keep track of the number of nodes in the linked list.
     */
    #counter = 0;

    /**
     * Adds a new node with the given value to the beginning of the linked list.
     * @param {*} value - The value to be added to the list.
     */
    addFirst(value){
        const node = new ListNode(value);
        node.next = this.#head;
        this.#head = node;
        this.#counter++;
    }

    /**
     * Removes and returns the value of the first node in the linked list.
     * @returns {*} The value of the removed node.
     * @throws Will throw an error if the list is empty.
     */
    removeFirst(){
        if (!this.#head){
            throw new Error('List is empty, therefore can\'t remove anything.');
        }

        const value = this.#head.value;
        this.#head = this.#head.next;
        this.#counter--;

        return value;
    }

    /**
     * Inserts a new node with the given value after the specified node.
     * @param {ListNode} node - The node after which the new node will be inserted.
     * @param {*} value - The value to be added to the list.
     */
    insertAfter(node, value){
        const newNode = new ListNode(value);
        newNode.next = node.next;
        node.next = newNode;
        this.#counter++;
    }

    /**
     * Removes the node that comes after the specified node.
     * @param {ListNode} node - The node after which the next node will be removed.
     */
    removeAfter(node){
        if (node.next){
            node.next = node.next.next;
            this.#counter--;
        }
    }

    /**
     * Finds the first node with the specified value.
     * @param {*} value - The value to search for in the list.
     * @returns {ListNode|null} The node with the specified value, or null if not found.
     */
    find(value){
        let ref = this.#head;
        while (ref){
            if (value === ref.value){
                return ref;
            }
            ref = ref.next;
        }
        return null;
    }

    /**
     * Gets the number of elements in the stack.
     * @returns {number} The number of elements in the stack.
     */
    get count(){
        return this.#counter;
    }

    /**
     * Generator function to iterate over the linked list.
     * @returns {IterableIterator<*>} An iterator that yields the values of the nodes in the list.
     */
    *[Symbol.iterator](){
        let current = this.#head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}