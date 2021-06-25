class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function shiftLinkedList(head, k) {
    let node = head;
    let count = 0;
    let hashMap = new Map();
    while (node != null) {
        hashMap.set(count, node);
        node = node.next;
        count++;
    }
    if (Math.abs(k) > hashMap.size)
        k = hashMap.size % k;
    if (k === 0) return hashMap.get(0);
    return marchForward(hashMap, k);
}

function marchForward(hashMap, k) {
    let size  = hashMap.size;
    let newHeadPosition = null;
    let newTailPosition = null;
    if (k < 0) {
        newHeadPosition = k;
        newTailPosition = k - 1;
    } if (k > 0) {
        newHeadPosition = size - k;
        newTailPosition = size - k - 1;
    }
    return swap(newHeadPosition, newTailPosition, hashMap);


}

function swap(newHeadPosition, newTailPosition, hashMap) {
    let size  = hashMap.size;
    let head = hashMap.get(0);
    let tail = hashMap.get(size - 1);
    tail.next = head;
    let newTail = hashMap.get(newTailPosition);
    newTail.next = null;
    return hashMap.get(newHeadPosition);
}