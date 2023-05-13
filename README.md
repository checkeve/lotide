# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @checkeve/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: takes in two arrays and logs a message to the console stating whether or not the two arrays are equal
* `assertEqual(actual, expected)`: logs a message to the console stating whether or not the two arrays passed to it are equal
* `assertObjectsEqual(object1, object2)`: takes in two objects and logs a message to the console showing whether or not they are a perfect match.
* `countLetters(sentence)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false based on whether they are equal to each other
* `eqObjects(object1, object2)`: takes in two objects and returns true or false, based on a perfect match
* `findKey(object, callback)`: takes in an object and a callback and scans the object, returning the first key for which the callback returns a truthy value
* `findKeyByValue(obj, value)`: takes in an object and a value, scans the object and return the first key which contains the given value
* `flatten(nestedArray)`: takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array
* `head(array)`: returns the first item in the array passed to it
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: returns a new array based on the results passing each element in the array to the callback function
* `middle(array)`: takes in an array and returns the middle-most element(s) of the given array
* `tail(array)`: returns an array of every item in the array passed to it except the first 
* `takeUntil(array, callback)`: returns a slice of the array passed to it with elements taken from the beginning up until the callback returns a truthy value
* `without(source, itemsToRemove)`: returns a subset of the source array that is passed to it, removing elements indicated in the itemSToRemove array
