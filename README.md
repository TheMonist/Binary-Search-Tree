# Binary-Search-Tree

## Description

A binary search tree (BST) is a node based abstract data structure. As a binary searcch tree it has two important aspects. As a tree, it represents a hierarchical structure of connected nodes. As a binary search, the hierarchical structure follows a strict order such that nodes that are less than the root node, or key are necessarily stored in left sub trees and nodes that are larger than the root node are necessarily stored in right sub trees.

It has the following properties:

- The left subtree of a node contains only nodes that are lesser than the root node.
- The right subtree of a node contains only nodes that are greater than the root node.
- The left and the right subtree must also be a binary search tree.

## Functions

In this implementation of the BST contains the following functions:

1. `Node` factory that has the attibutes for the data it stores, left, and right children.
2. `Tree` factory that accepts an array when initialized. The `Tree` has a `root` attribute which uses the return value of `buildTree`.
3. `buildTree` which takes an array of data and turns it into a balanced binary tree full of `Node` objects appropriately placed on the tree.
4. `insert` and `delete` that accepts values to store and/or delete.
5. `find` which accepts a value and returns the node with the given value.
6. `levelOrder` which accepts another function as a parameter. It traverses the tree in breath-first order with the node provided in the argument.
7. `inorder`, `preorder`, and `postorder` traverses the tree in their respective depth-first order and yields each node to the provide function given as an argument. The function returns an array of values if no function is given.
8. `height` accepts a node and returns its height. Height is defined as the number of edges in the longest path from a given node to a leaf node.
9. `depth` accepts a node and returns its depth. Depth is defined as the number of edges in a path from a given node to the tree's root node.
10. `isBalanced` checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.
11. `rebalance` rebalances an unbalanced tree.
12. `driver` which does the following:

- Creates a BST from an array of random numbers < 100.
- Confirms that the tree is balanced by calling `isBalanced`.
- Prints out all elements in level, pre, post, and in order.
- Unbalances the tree by adding several numbers > 100.
- Confirms the tree is unbalanced by calling `isBalanced`.
- Balances the tree by calling `rebalance`.
- Confirms that the tree is balanced by calling `isBalanced`.
- Prints out all elements in level, pre, post, and in order.
