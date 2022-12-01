class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst = (data) => {
    this.head = new Node(data, this.head);
    this.size++;
  };

  insertAtIndex = (index, data) => {
    if (index === 0) this.insertFirst(data);
    else if (index === this.size) this.insertLast(data);
    else if (index > this.size) {
      console.error("can not insert at this index");
    } else {
      let current = this.head;
      let i = 1;
      while (i < index && current) {
        current = current.next;
        i++;
      }
      current.next = new Node(data, current.next);
      this.size++;
    }
  };

  deleteFirst = () => {
    if (this.size < 1)
      console.log(
        `LinkedList contains ${this.size} elements. can not perform this operation`
      );
    else {
      this.head = this.head.next;
      this.size--;
    }
  };

  deleteLast = () => {
    if (this.size === 0)
      console.log(
        `LinkedList contains ${this.size} elements. can not perform this operation`
      );
    else if (this.size === 1) this.deleteFirst();
    else {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.size--;
    }
  };

  insertLast = (data) => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(data);
    this.size++;
  };

  printList = () => {
    let current = this.head;
    let output = "head";
    console.log("size:" + this.size);
    while (current) {
      output = output + " -> " + current.data;
      current = current.next;
    }
    console.log(output + " -> null");
  };
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertLast(400);
ll.insertFirst(200);

// ll.insertLast(300);
// ll.insertLast(400);
// ll.insertAtIndex(8, 500);
// ll.deleteFirst();
// ll.insertAtIndex(1, 200);
// ll.insertAtIndex(2, 250);
ll.printList();
ll.deleteLast();
ll.printList();
