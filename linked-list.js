const Node = function linkedListNode(value, nextNode = null) {
  return { value, nextNode };
};

export default function LinkedList() {
  let head = null;

  const tail = function finalNodeOfLinkedList() {
    if (!head) {
      return head;
    }

    let node = head;
    while (node.nextNode) {
      node = node.nextNode;
    }

    return node;
  };

  const append = function appendNode(value) {
    const newNode = Node(value);

    if (!head) {
      head = newNode;
    } else {
      tail().nextNode = newNode;
    }
  };

  const prepend = function prependNode(value) {
    const nextNode = head;
    head = Node(value, nextNode);
  };

  const size = function sizeOfLinkedList() {
    if (!head) return 0;

    let node = head;
    let numNodes = 0;

    while (node) {
      numNodes += 1;
      node = node.nextNode;
    }

    return numNodes;
  };

  const at = function nodeAt(index) {
    if (!head) return "The linked list has no nodes";

    let node = head;
    let counter = 0;

    while (counter < index && node) {
      node = node.nextNode;
      counter += 1;
    }

    return !node ? "Node does not exist at the specified index" : node;
  };

  const pop = function removeLastNode() {
    if (!head) return "The linked list has no nodes";

    let previousNode;
    let node = head;

    while (node.nextNode) {
      previousNode = node;
      node = node.nextNode;
    }

    previousNode.nextNode = null;

    return node;
  };

  const contains = function linkedListContains(value) {
    if (!head) return false;

    let node = head;

    while (node) {
      if (node.value === value) return true;
      node = node.nextNode;
    }

    return false;
  };

  const find = function findValueInList(value) {
    if (!head) return "The list has no nodes.";

    let node = head;
    let index = 0;

    while (node) {
      if (node.value === value) {
        return index;
      }
      index += 1;
      node = node.nextNode;
    }

    return "The value entered is not present in the list";
  };

  const toString = function expressListAsString() {
    if (!head) return "Empty list.";

    let node = head;
    let string = `( ${node.value} )`;

    while (node.nextNode) {
      node = node.nextNode;
      string += ` -> ( ${node.value} )`;
    }

    string += " -> null";

    return string;
  };

  const insertAt = function insertNodeAtIndex(value, index) {
    const newNode = Node(value);

    if (!head) {
      head = newNode;
    } else {
      let previousNode = null;
      let node = head;
      let counter = 0;

      while (counter < index) {
        previousNode = node;
        node = node.nextNode;
        counter += 1;
      }

      previousNode.nextNode = newNode;
      newNode.nextNode = node;
    }
    return newNode;
  };

  const removeAt = function removeNodeAtIndex(index) {
    if (!head) return "The list has no nodes";
    if (index > (size() - 1)) return "Index does not reference a value in the list";

    let previousNode = null;
    let node = head;
    let counter = 0;

    while (counter < index) {
      previousNode = node;
      node = node.nextNode;
      counter += 1;
    }

    previousNode.nextNode = node.nextNode;

    return node;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}
