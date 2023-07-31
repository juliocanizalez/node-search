interface NodeTree {
    value: string;
    left?: NodeTree;
    right?: NodeTree;
}

// ============================================
// RECURSIVELY FINDS THE LEVEL OF A NODE
// WITH A GIVEN VALUE IN A BINARY TREE.
// ============================================
const findLevel = (
    nodeTree: NodeTree | null,
    levelToFind: string,
    level = 0
) => {
    if (nodeTree) {
        const left = nodeTree.left;
        const right = nodeTree.right;

        if (nodeTree.value === levelToFind) {
            console.log(`found ${levelToFind} at level: ${level}`);
        } else {
            if (left) {
                findLevel(left, levelToFind, level + 1);
            }
            if (right) {
                findLevel(right, levelToFind, level + 1);
            }
        }
    }
};

// ============================================
// FILL NODE
// ============================================
const createNodeTree = (value: string): NodeTree => {
    return {
        value,
    };
};

const fillNodeTreeWithLoop = (
    rootValue: string,
    n: number
): NodeTree | null => {
    if (n <= 0) {
        return null;
    }

    const root: NodeTree = createNodeTree(rootValue);
    const queue: NodeTree[] = [root];
    let count = 1; // Keeps track of the number of nodes created so far

    while (count <= n) {
        const currentNode = queue.shift();

        // Checking if currentNode is probably undefined
        if (!currentNode) {
            break;
        }

        // Create left child if possible
        if (count <= n) {
            const leftChild: NodeTree = createNodeTree(`l${count}`);
            currentNode.left = leftChild;
            queue.push(leftChild);
            count++;
        }

        // Create right child if possible
        if (count <= n) {
            const rightChild: NodeTree = createNodeTree(`l${count}`);
            currentNode.right = rightChild;
            queue.push(rightChild);
            count++;
        }
    }

    return root;
};

// ============================================
// ASSIGN N VALUES TO ROOT NODE
// n: THE NUMBER OF CHILD NODES OF 'root'
// ============================================
const n = 6;
const rootNode: NodeTree | null = fillNodeTreeWithLoop('root', n);

// ============================================
// FIND THE DESIRED NODE
// ============================================
findLevel(rootNode, 'l5'); // PRINTS: level 2
