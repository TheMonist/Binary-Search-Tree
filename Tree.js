import Node from "./Node";
import mergeSort from "./MergeSort";

//Tree Factory
const Tree = (inputArray) => {
    const buildTree = (arr, start, end) => {
        
        //Base case
        if (start > end) return null;

        //Find the middle
        let mid = parseInt(start + end) / 2;
        let root = Node(arr[mid]);

        //Recursively bulid left and right tree roots
        root.leftChild = buildTree(arr, start, mid - 1);
        root.rightChild = buildTree(arr, mid - 1, end);

        return root
    }

    const array = [...Set(mergeSort(inputArray))]
    let root = buildTree(array, 0, array.length - 1);

    const insertVal = (val, rootNode = root) => {

        //Base Case: Tree is empty
        if(rootNode === null) {
            rootNode = Node(val)
            return rootNode;
        }

        //Going through the tree
        if (val < rootNode) {
            rootNode.leftChild = insertVal(val, rootNode.leftChild);
        } else if (val > rootNode) {
            rootNode.rightChild = insertVal(val, rootNode.rightChild);
        }

        //Return unchanged root node
        return rootNode;
    }

    const deleteVal = (val, rootNode = root) => {
        
        //Base Case: Tree is empty
        if (rootNode === null) return rootNode;
        
        if (val < rootNode.data) {
            rootNode.leftChild = deleteVal(val, rootNode.leftChild);
        } else if (val > rootNode.data) {
            rootNode.rightChild = deleteVal(val, rootNode.rightChild);
        }

        // If val == root.data
        else {
            //If root has one or no child 
            if (rootNode.leftChild === null) {
                return rootNode.rightChild;
            } else if (rootNode.rightChild === null) {
                return rootNode.leftChild;
            } 
            // For nodes with two children, find inOrder successor
            rootNode.data = minValue(rootNode.rightChild);
            //Deleting the inOrder successor
            rootNode.rightChild = deleteVal(rootNode.data, rootNode.rightChild);
        }
        return rootNode;
    }

    const minValue = (root) => {
        let minV = root.data;
        while(root.leftChild != null) {
            minV = root.leftChild.data;
            root = root.leftChild;
        }

        return minV;
    }

    const find = (val, rootNode = root) => {
        if (rootNode === null) return false;
        if (rootNode.data === val) return rootNode;
        if (rootNode.data > val) {
            return find(val, rootNode.rightChild);
        }

        return rootNode;
    }

    //Breadth First Search
    //Prints node values level by level
    const levelOrder = (callback) => {
        if (root === null) return [];
        const queue = [root];
        const result = []
        while (queue.length > 0) {
            const node = queue.shift();
            if (node.leftChild != null) queue.push(node.leftChild);
            if (node.rightChild != null) queue.push(node.rightChild);
            if (callback) callback(node);
            else result.push(node.data);
        }

        return result;
    }

    //Depth First Search
    //Traverses tree by root -> left -> right
    const preOrder = (rootNode = root, preOrderData = []) => {
        if (rootNode === null) return [];
        preOrderData.push(rootNode.data);
        if (rootNode.leftChild != null) preOrder(rootNode.leftChild, preOrderData);
        if (rootNode.rightChild != null) preOrder(rootNode.rightChild, preOrderData);
        return preOrderData;
    }

    //Traverses tree by left -> root -> right
    const inOrder = (rootNode = root, inOrderData = []) => {
        if (rootNode === null) return [];
        if(rootNode.leftChild != null) inOrder(rootNode.leftChild, inOrderData);
        inOrderData.push(rootNode.data);
        if(rootNode.rightChild != null) inOrder(rootNode.rightChild, inOrderData);
        return inOrderData;
    }

    //Traverses tree by left -> right -> root
    const postOrder = (rootNode = root, postOrderData = []) => {
        if (rootNode === null) return [];
        if(rootNode.leftChild != null) postOrder(rootNode.leftChild, postOrderData);
        if(rootNode.rightChild != null) postOrder(rootNode.rightChild, postOrderData);
        postOrderData.push(rootNode.data);
        return postOrderData;
    }

    const height = (node) => {
        //Base case
        if (node === null || !node || find(node) === false) return -1;
        return Math.max(height(node.leftChild), height(node.rightChild)) + 1;
    }

    const depth = (root, node) => {
        let level = -1;
        //Base case
        if (root === null) return -1;
        //Recursively searches left and right tree for node
        if (
            root === null || 
            (level = depth(root.leftChild, node)) >= 0 || 
            (level = depth(root.rightChild, node)) >= 0
            ) {
            //Returns depth of node
            return level + 1;
        }

        return level;
    }

    const traverse = (rootNode = root, array = []) => {
        array.push(rootNode.data);
        if (rootNode.leftChild != null) traverse(rootNode.leftChild, array);
        if (rootNode.rightChild != null) traverse(rootNode.rightChild, array);
        return array;
    }

    const isBalanced = (rootNode = root) => {
        //Base case
        if (rootNode == null) return true;
        if (
            Math.abs(height(rootNode.leftChild) - height(rootNode.rightChild)) <= 1 && 
            isBalanced(rootNode.leftChild) === true &&
            isBalanced(rootNode.rightChild) === true
            ) {
                return true;
        }
        return false;
    }

    const reBalance = (rootNode = root) => {
        return isBalanced(rootNode) ? rootNode : (root = Tree(traverse()).root);
    }

    return {
        insertVal,
        deleteVal,
        find,
        levelOrder,
        preOrder,
        inOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        reBalance,
    }
}

export default Tree;