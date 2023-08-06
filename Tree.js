import Node from "./Node";
//merge sort function

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
}