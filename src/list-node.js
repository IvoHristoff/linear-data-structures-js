/**
 * Represents a node in a linked list.
 * @class
 */
export default class ListNode {

     /**
     * Creates a new ListNode.
     * @param {*} value - The value stored in the node.
     */
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
        this.prev = null;
    }
}