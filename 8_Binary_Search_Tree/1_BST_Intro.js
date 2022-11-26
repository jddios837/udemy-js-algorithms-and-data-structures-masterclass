class Node {
    constructor(value) {
        this.value = value;
        this.left  = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor(props) {
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(6);
console.log(tree);

