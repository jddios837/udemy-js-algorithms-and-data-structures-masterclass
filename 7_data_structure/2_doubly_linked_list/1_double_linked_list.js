class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    // add a new node in the tail of the list
    push(val) {
        let newNode = new Node(val);
        if (this.lenght === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.lenght++;
        return this;
    }
    // remove last node in the tail of the list
    pop() {
        if(this.head === null) return undefined;

        let poppedNode = this.tail;
        if(this.lenght === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //let prevNode = this.tail.prev;
            //prevNode.next = null;
            //this.tail = prevNode;
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.lenght--;
        return poppedNode;
    }
    // remove node on the head of the list
    shift() {
        if(this.head === null) return undefined;

        let oldHead = this.head;
        if(this.lenght === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.lenght--;
        return  oldHead;
    }
    // add a new node on the head of the list
    unshift(val) {
        let newNode = new Node(val);
        if (this.lenght === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.lenght++;
        return this;
    }
    // get a specific node on the list
    get(index) {
        if (index < 0 || index >= this.lenght) return null;

        let currentNode;
        if (index <= this.lenght / 2) {
            let count = 0;
            currentNode = this.head;
            while (count !== index) {
                currentNode = currentNode.next;
                count++;
            }
        } else {
            let count = this.lenght - 1;
            currentNode = this.tail;
            while(count !== index){
                currentNode = currentNode.prev;
                count--;
            }
        }

        return currentNode;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.lenght) return false;
        if (index === 0) {
            !!this.unshift(value);
        } else if (index === this.lenght) {
            !!this.push(value);
        } else {
            let beforeNode = this.get(index - 1);
            let afterNode = beforeNode.next;
            let newNode = new Node(value);
            // connect with pre
            beforeNode.next = newNode;
            newNode.prev = beforeNode;
            // connect with post node
            afterNode.prev = newNode;
            newNode.next = afterNode;
        }
        this.lenght++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.lenght) return undefined;
        if (index === 0) return this.shift();
        if (index === this.lenght - 1) return this.pop();

        let nodeToRemove = this.get(index);

        let prevNode = nodeToRemove.prev;
        let nextNode = nodeToRemove.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        this.lenght--;

        return nodeToRemove;
    }
}

let list = new DoublyLinkedList();
list.push("Primero");
list.push("Segundo");
list.push("Tercero");
list.push("Cuarto");
list.unshift("Nuevo Valor 1!")
list.unshift("Nuevo Valor 2!")
list.unshift("Nuevo Valor 3!")
console.log(list);