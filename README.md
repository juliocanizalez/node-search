# Problem:

The algorithm's goal is to traverse the binary tree starting from the `root` node and recursively search for a node with a given `value`. Once the node with the target value is found, the algorithm prints the level (depth) at which the node is present in the tree.

[![](https://mermaid.ink/img/pako:eNqNkU0LwjAMhv9KyWmCA7ephx08edWL3qyHukY37NrRdYqI_93M4rcDcyghz8ubpDlDZiRCCltljlkurGPLKdeMom42OyuqnM1JUfvaW13hARUbPEkb1hgXBO3b6z0JatlpEHUbsDAMmYqCQEWvbneZxzHh-N9m8buLirxHQh7JZ4s7HBIcfsHYwxHBURccExz_HO2R3D6X1BOmV9oPWa-hDyXaUhSSLnNuhRxcjiVySCmVwu45cH0hnWicWZx0BqmzDfahqaRwOC0EbV1CuhWqpirKwhk786e-XfxyBf4ehug?type=png)](https://mermaid.live/edit#pako:eNqNkU0LwjAMhv9KyWmCA7ephx08edWL3qyHukY37NrRdYqI_93M4rcDcyghz8ubpDlDZiRCCltljlkurGPLKdeMom42OyuqnM1JUfvaW13hARUbPEkb1hgXBO3b6z0JatlpEHUbsDAMmYqCQEWvbneZxzHh-N9m8buLirxHQh7JZ4s7HBIcfsHYwxHBURccExz_HO2R3D6X1BOmV9oPWa-hDyXaUhSSLnNuhRxcjiVySCmVwu45cH0hnWicWZx0BqmzDfahqaRwOC0EbV1CuhWqpirKwhk786e-XfxyBf4ehug)

To perform this task, the algorithm uses a recursive function called `findLevel`, which takes three parameters: `nodeTree` (the current node being processed), `levelToFind` (the value of the node to find), and `level` (the current level of the node being processed).

The recursive `findLevel` function works as follows:

1. It checks if the `value` of the current node (`nodeTree`) is equal to the `levelToFind`. If it is, it prints a message indicating that the target node has been found at the current `level`.

2. If the `value` of the current node is not equal to `levelToFind`, the algorithm proceeds to check its left and right children (if they exist). It does this by recursively calling the `findLevel` function with the left and right children, updating the `level` parameter to `level + 1`.

3. The recursive process continues until either the node with the target value is found, or all nodes in the tree have been traversed.

To use this algorithm, you can call the `findLevel` function, passing the `root` node of the binary tree as the first argument and the value of the node you want to find as the second argument. For example:

```ts
findLevel(root, 'l5'); // prints level 2
```

This will search for the node with the value `'l5'` in the binary tree and print the level at which it is found. If the value is not present in the tree, nothing will be printed.
