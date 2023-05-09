const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Testing...
assertEqual(tail([5, 4, 3, 2, 1]).toString(), "4,3,2,1");
assertEqual(tail(["hi", "how", "are", "you"]).toString(), "how,are,you");
assertEqual(tail(["hi", "how", "are", "you"]).toString(), "are,you");