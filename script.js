import LinkedList from "./linked-list.js";

const list = LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.removeAt(2);

console.log(list.toString());