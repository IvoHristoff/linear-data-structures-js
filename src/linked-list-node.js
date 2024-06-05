/**
 * Represents a node in a linked list.
 * @class
 */
export default class LinkedListNode {

     /**
     * Creates a new LinkedListNode.
     * @param {*} value - The value stored in the node.
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}