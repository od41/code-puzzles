/* 
    You are given coins of diff. denominations & a total amount of money amount.
    Write a function to compute the fewest number of coins that you need to make
    up that amount. If that amount of money cannot be made up by any combination
    of the coins, return -1.

    You may assume that you have an infinite number of each kind of coin.
*/

function coinChange(coins, amount) {
    if(coins.length===1 && coins[0]>amount) return 0
    // generate my table for tabulation
    const table = Array.from({length:amount+1}, ()=>Infinity)
    table[0]=0
    for(let coin of coins){
        for(let index=0; index<table.length; index++) {
            if(coin<=index) {
                let temp_index = index - coin
                const potentialAmt = table[temp_index] + 1
                table[index] = Math.min(potentialAmt, table[index])

            }
        }
    }

    console.log('table', table)


    console.log(table)
    // sort the coin denominations
    // iteratively fill table
    // memoize the subproblem solutions
    return table[table.length-1] === Infinity ? -1 : table[table.length-1];
}

console.log('t1: expect 3 / res: ', coinChange([1,2,5], 11));
console.log('t2: expect -1 / res: ', coinChange([2], 3));
console.log('t3: expect 0 / res: ', coinChange([1], 0));
console.log('t4: expect 2 / res: ', coinChange([1], 2));