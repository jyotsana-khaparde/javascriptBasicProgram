/*/**********************************************************************************
 *  Purpose         : Checks Balanced Parantheses in input expression using Queue.
 *  @file           : PalidromeChecker.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 02-01-2019
 **********************************************************************************/

const dequeUsingLinked = require('../DatastructurePrograms/Deque');
var deque = new dequeUsingLinked.Deque;
var utility = require('../utility/Utility');
var read = require('readline-sync');
var inputStr = read.question('Enter a string : ');
console.log('Input String is : ', inputStr);
for (let r = 0; r < inputStr.length; r++) {
    deque.enqueue(inputStr.charAt(r));
}
console.log('Array in Dequeue is :');
deque.print();
var x, y, str1 = "",
    str2 = "";
for (let i = 0; i < deque.Size(); i++) {
    x = deque.removeFirstNode();
    str1 += x;
}
for (let r = 0; r < inputStr.length; r++) {
    deque.enqueue(inputStr.charAt(r));
}
for (let i = 0; i < deque.Size(); i++) {
    y = deque.removeLastNode();
    if (y == 0) {
        break;
    } else {
        str2 += y;
    }
}
utility.checkPalindromeInDeque(str1, str2);