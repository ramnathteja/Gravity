class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findLoop(head) {
    let hashSet = new Set();
    let node = head;
    while (!hashSet.has(node)) {
        hashSet.add(node);
        node = node.next;
    }
    return node;

}

function findLoopConstantSpace(head) {
    let first = head.next;
    let second = first.next;
    while (first != second) {
        first = first.next;
        second = second.next.next;
    }
    first = head;
    while (first != second) {
        first = first.next;
        second = second.next;
    }
    return first;
}
