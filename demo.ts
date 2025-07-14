class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function getDecimalValue(head: ListNode | null): number {
    let result = 0;
    let current = head;

    while (current !== null) {
        result = (result << 1) | current.val;
        current = current.next;
    }

    return result;
}
// Creating the list [1, 0, 1]
const node3 = new ListNode(1);
const node2 = new ListNode(0, node3);
const node1 = new ListNode(1, node2);

console.log(getDecimalValue(node1)); // Output: 5
