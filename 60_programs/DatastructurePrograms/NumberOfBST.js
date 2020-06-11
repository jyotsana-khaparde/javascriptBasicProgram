/*/**********************************************************************************
 *  Purpose         : Check how many Binary Search Tree can be created using N nodes .
 *  @file           : NumberOfBST.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 02-01-2019
 **********************************************************************************/

var utility = require('../utility/Utility');
var read = require('readline-sync');
var number = read.question('enter number :');
var output = utility.countBST(number);
console.log("Output :", output);
process.exit();