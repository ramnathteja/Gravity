class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeLinkedLists(headOne, headTwo) {
    let listOne = headOne;
    let listTwo = headTwo;
    let lastListOne = null;
    let head = listOne.value < listTwo.value ? listOne : listTwo;
    while (listTwo != null && listOne != null) {
        if (listOne.value >= listTwo.value) {
            let temp = listTwo.next;
            if (lastListOne != null) {
                lastListOne.next = listTwo;
                lastListOne = listTwo;
            } else {
                lastListOne = listTwo;
            }
            listTwo.next = listOne;

            listTwo = temp;
        } else {
            lastListOne = listOne;
            listOne = listOne.next;
        }
    }
    if (listTwo != null) {
        lastListOne.next = listTwo;
    }
    return head;
}