const head = require('../head');
const assertEqual = require('../assertEqual');

//Testing...
assertEqual(head([5, 4, 3, 2, 1]), 5);
assertEqual(head(["hi", "how", "are", "you"]), "hi");
assertEqual(head(["hi", "how", "are", "you"]), "you");