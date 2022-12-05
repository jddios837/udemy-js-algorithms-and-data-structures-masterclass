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

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            // will break the while using return this;
            while(true) {
                // check if the value already exist on the tree
                if (value === currentNode.value) return undefined

                if (value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // else {
                    //     currentNode = currentNode.left;
                    // }
                    currentNode = currentNode.left;
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // else {
                    //     currentNode = currentNode.right;
                    // }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false;

        let current = this.root, found = false;

        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contain(value) {
        if (this.root === null) return false;

        let current = this.root, found = false;

        while (current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // find(value) {
    //     if (this.root === null) return -1;
    //
    //     if (this.root.value === value) {
    //         return this.root;
    //     } else {
    //         let currentNode = this.root;
    //         while(true){
    //             if (currentNode.value === value) return currentNode;
    //
    //             if (value < currentNode.value) {
    //                 // left path
    //                 if (currentNode.left != null) currentNode = currentNode.left
    //                 else return -1;
    //             } else {
    //                 // right path
    //                 if (currentNode.right != null) currentNode = currentNode.right;
    //                 else return -1;
    //             }
    //         }
    //     }
    // }
}

// A Valid Tree
//     10
//   5       13
// 2   7   11   16
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log('---------- FIND NODE')
console.log(tree.find(100));
console.log(tree.contain(100));
console.log(tree.find(13));
console.log(tree.contain(13));
console.log('hola');


