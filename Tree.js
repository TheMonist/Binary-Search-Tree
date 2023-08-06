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

    return {
        insertVal,
        deleteVal,
        find,
    }
}