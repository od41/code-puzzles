/* 
    You are given coins of diff. denominations & a total amount of money amount.
    Write a function to compute the fewest number of coins that you need to make
    up that amount. If that amount of money cannot be made up by any combination
    of the coins, return -1.

    You may assume that you have an infinite number of each kind of coin.
*/

function coinChange(coins, amount) {

    return 1;
}

console.log('t1: expect 11 / res: ', coinChange([1,2,5], 11))
console.log('t2: expect -1 / res: ', coinChange([2], 3))
console.log('t3: expect 0 / res: ', coinChange([1], 0))
console.log('t4: expect 2 / res: ', coinChange([1], 2))