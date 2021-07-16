// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}




function shiftLinkedList(head, k) {
    //*edge1
    if (k === 0) return head;
    let boundary = findTheLength(head);
    if (k > boundary.len) {
        k = k % boundary.len;
        if (k === 0) return head;
    }
    metrics = findTheRequired(head, k, boundary);
    return swap(metrics);
}

function findTheLength(node) {
    let counter = 0;
    let boundary = {};
    while (node != null) {
        counter++;
        boundary.lastNode = node;
        node = node.next;
    }
    boundary.len = counter;
    return boundary;
}

function findTheRequired(head, k, boundary) {
    let length = boundary.len;
    let metrics = {};
    metrics.head = head;
    metrics.last = boundary.lastNode;
    if (k > 0) {
        positionOfInterest = length - k;
    } else {
        positionOfInterest = 0 + k;
    }
    let currentPosition = 0;
    let node = head;
    while (currentPosition != positionOfInterest) {
        currentPosition++;
        node = node.next;
    }
    metrics.positionOfInterest = node;
}

function swap(metrics) {
   let lastNode = metrics.last;
   let head = metrics.head;
   let newLast = metrics.positionOfInterest;
   lastNode.next = head;
   head = newLast.next;
   newLast.next = null;
   return head;
}

// Do not edit the lines below.
//   exports.LinkedList = LinkedList;
exports.shiftLinkedList = shiftLinkedList;