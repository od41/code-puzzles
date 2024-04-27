/* 
    You are given coins of diff. denominations & a total amount of money amount.
    Write a function to compute the fewest number of coins that you need to make
    up that amount. If that amount of money cannot be made up by any combination
    of the coins, return -1.

    You may assume that you have an infinite number of each kind of coin.
*/

function dfsTable(table, startRow, startCol, uniquePaths, visited = new Set()) {
    console.log('dfs', [...uniquePaths], [...uniquePaths.add(visited)])
    if(startRow < 0 || startRow >=table.length || startCol < 0 || startCol >= table[0].length || uniquePaths.has(visited) || visited.has(`${startRow},${startCol}`)) {
        return;
    }

    console.log('elsewhere')

    visited.add(`${startRow},${startCol}`);

    if(table[startRow][startCol] === "end") {
        console.log('visited destination: ', [...visited])
        console.log('uniquepaths destination: ', [...uniquePaths])
        uniquePaths.add(visited)
        visited.clear()
    }

    const neighbours = [
        [startRow-1, startCol], // Up
        [startRow+1, startCol], // Down
        [startRow, startCol-1], // Left
        [startRow, startCol+1], // Right
    ]

    for (const neighbour of neighbours) {
        dfsTable(table, neighbour[0], neighbour[1], uniquePaths, visited)
    }
}

function uniquePaths(m, n) {
    const table = Array.from({length:m}, ()=>Array.from({length:n}, ()=>0))

    const uniquePaths = new Set()

    // dfs
    table[0][0] = 'start'
    table[table.length-1][table[table.length-1].length-1] = 'end'

    // while() {
        dfsTable(table, 0, 0, uniquePaths)
    // }
    console.log('table: ', table)

    return uniquePaths.size;
}

console.log('t1: expect 3 / res: ', uniquePaths(3,2));