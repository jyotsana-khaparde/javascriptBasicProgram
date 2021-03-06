/*/**********************************************************************************
 *  Purpose         : Generates distinct Coupon Code using Math.Random().
 *  @file           : CouponGenerator.js
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 12-09-2018
 **********************************************************************************/
/*
 *readline module provides an interface for reading data from a Readable stream one line 
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var utility = require('../utility/Utility');
var couponNumber = utility.couponGenerator();
console.log('Coupon number generated is :', couponNumber);
process.exit();