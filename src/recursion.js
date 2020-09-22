/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {
    if (n === 0) {
        return 1;
    } else if (n > 0) {
        return n * factorial(n - 1);
    } else {
        return null;
    }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
    if (array.length === 0) {
        return 0;
    }

    if (array.length === 1) {
        return array[0];
    }

    return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
    if (Array.isArray(array)) {
        if (array.length === 0) {
            return 0;
        }

        return arraySum(array[0]) + arraySum(array.slice(1));
    } else if (array === undefined) {
        return 0;
    } else {
        return array;
    }
};

// 4. Check if a number is even.
var isEven = function (n) {
    if (n === 0) {
        return true;
    } else if (n < -1) {
        return isEven(n + 2);
    } else if (n > 1) {
        return isEven(n - 2);
    } else {
        return false;
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
    if (n === 0) {
        return n;
    } else if (n < 0) {
        return n + sumBelow(n + 1) + 1;
    } else if (n > 0) {
        return n + sumBelow(n - 1) - 1;
    }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
    if (x + 1 >= y && x - 1 <= y) {
        return [];
    } else if (x < y) {
        return [x + 1].concat(range(x+1,y));
    } else {
        return [x - 1].concat(range(x-1,y));
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {
    if (exp === 1) {
        return base;
    }

    return exponent(base * base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {
    if (n === 1) {
        return true;
    } else if (n < 1) {
        return false;
    } else {
        return powerOfTwo(n / 2);
    }
};

// 9. Write a function that reverses a string.
var reverse = function (string) {
    if (string.length < 2) {
        return string;
    }

    return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
    if (string.length < 2) {
        return true;
    }

    return string[0] === string[string.length - 1] && palindrome(string.slice(1, string.length - 1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
    if (x < y) {
        return x;
    }

    return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function (x, y) {
    if (true) {

    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
    if (str1.length === 0) {
        return str2.length === 0;
    } else if (str1.length === 1) {
        return str1[0] === str2[0] && str2.length === 1;
    } else {
        return compareStr(str1.slice(0,str1.length/2), str2.slice(0,str2.length/2)) && 
               compareStr(str1.slice(str1.length / 2), str2.slice(str2.length / 2));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
    if (str.length === 0) {
        return [];
    } else if (str.length === 1) {
        return [str];
    } else {
        return createArray(str.slice(0, str.length / 2)).concat(createArray(str.slice(str.length / 2)));
    }
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if (array.length === 0) {
        return [];
    } else if (array.length === 1) {
        return [array[0]];
    } else {
        return reverseArr(array.slice(array.length/2))
        .concat(reverseArr(array.slice(0, array.length/2)));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [value];
    } else {
        return buildList(value, Math.floor(length/2))
        .concat(buildList(value, Math.ceil(length/2)));
    }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
    var key = {
        '3': 'Fizz',
        '5': 'Buzz'
    };

    if (n === 1) {
        return ['1'];
    } else {
        var result = '';
        for (k in key) {
            if (n%k === 0) {
                result += key[k];
            }
        }
        return fizzBuzz(n-1).concat(result || String(n));
    }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    if (Array.isArray(array)) {
        if (array.length === 0) {
            return 0;
        } else if (array.length === 1) {
            return countOccurrence(array[0], value);
        } else {
            return countOccurrence(array.slice(0, array.length / 2), value) + countOccurrence(array.slice(array.length / 2), value);
        }
    } else {
        return array === value ? 1 : 0;
    }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {
    if (Array.isArray(array)) {
        if (array.length === 0) {
            return [];
        } else if (array.length === 1) {
            return rMap(array[0], callback);
        } else {
            return rMap(array.slice(0, array.length / 2), callback)
                .concat(rMap(array.slice(array.length / 2), callback));
        }
    } else {
        return [callback(array)];
    }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function (obj, key) {
    var count = 0;

    if (typeof obj === 'object') {
        for (k in obj) {
            if (k === key) {
                count++;
            }

            count += countKeysInObj(obj[k], key);
        }
    }

    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function (obj, value) {
    var count = 0;
    if (typeof obj === 'object') {
        for (k in obj) {
            if (obj[k] === value) {
                count++;
            }

            count += countValuesInObj(obj[k], value);
        }
    }

    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, oldKey, newKey) {
    if (typeof obj === 'object') {
        for (k in obj) {
            replaceKeysInObj(obj[k], oldKey, newKey);
        }

        if (oldKey in obj) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
    }

    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
    var sum = 0;

    if (typeof obj === 'object') {
        for (key in obj) {
            sum += nestedEvenSum(obj[key]);
        }
    } else {
        if (isEven(obj)) {
            sum = obj;
        }
    }

    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
    if (array === undefined) {
        return [];
    }

    if (array.length === 0) {
        return array;
    } else if (array.length === 1) {
        if (Array.isArray(array[0])) {
            return flatten(array[0]);
        } else {
            return array;
        }
    }

    return flatten(array.slice(0, array.length / 2)).concat(flatten(array.slice(array.length / 2)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj) {
    if (obj === undefined) {
        obj = {};
    }

    if (str.length === 1) {
        if (str in obj) {
            obj[str]++;
        } else {
            obj[str]=1;
        }
    } else if (str.length > 1) {
        letterTally(str.slice(0, str.length / 2),obj);
        letterTally(str.slice(str.length / 2),obj);
    }

    return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
    if (array.length === 0) {
        return [];
    }

    var prefix = [Math.abs(array[0])];

    if (array.length === 1) {
        return prefix;
    }

    return prefix.concat(alternateSign(array.slice(1)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
    if (str.length === 0) {
        return str;
    }

    var key = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    var prefix = str[0] in key ? key[str[0]] : str[0];

    return prefix + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
    if (min === undefined) {
        min = 0;
    }

    if (max === undefined) {
        max = array.length - 1;
    }

    if (min === max) {
        if (array[min] === target) return min;
        return null;
    }

    var mid = Math.floor(min + (max - min) / 2);
    return binarySearch(array, target, min, mid) ?? binarySearch(array, target, mid + 1, max);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
    if (array.length < 2) {
        return array;
    }

    var left = mergeSort(array.slice(0, array.length / 2));
    var right = mergeSort(array.slice(array.length / 2));
    var i = 0;
    var j = 0;
    var target = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            target.push(left[i]);
            i++;
        } else {
            target.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        target.push(left[i]);
        i++;
    }

    while (j < right.length) {
        target.push(right[j]);
        j++;
    }

    return target;
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
    if (Array.isArray(input)) {
        var output = [];
        for (var i = 0; i < input.length; i++) {
            output[i] = clone(input[i]);
        }

        return output;
    } else if (typeof input === 'object') {
        var output = {};
        for (k in input) {
            output[k] = clone(input[k]);
        }

        return output;
    } else {
        return input;
    }
};
