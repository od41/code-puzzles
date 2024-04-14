/* 
    Given a triangle array, return the minimum path sum from top to bottom.

    For each step, you may move to an adjacent number of the row below. More
    formally, if you are on index i on the current row, you may have to move 
    either index i or index i+1 on the next row.
*/


function minimumPathTotal(triangle) {
    const table = []
    for(let row of triangle) table.push(new Array(row.length).fill(0));

    table[0][0] = triangle[0][0]
    for (let row=1; row<triangle.length; row++){
        for(let col=0;col<triangle[row].length; col++){
            if(col===0){
                // add first items
                const sum = triangle[row][col] + table[row-1][col]
                console.log('debug, first', row, col, sum)
                table[row][col]=sum
            } else if (col===triangle[row].length-1) {
                // add last items
                let sum = triangle[row][col] + table[row-1][table[row-1].length-1]
                // if(row===1){sum = triangle[row][col] + table[row-1][0]
                // }else {sum=triangle[row][col] + table[row][col]}
                console.log('debug: last', row, col, sum)
                table[row][col] = sum
            } else {
                // add the minimum for the rest
                const min = Math.min(table[row-1][col], table[row-1][col-1])
                const sum = min + triangle[row][col]
                console.log('debug minimum', row, col, sum, min)
                table[row][col] = sum
            }
        }
    }
    // find min path
    // go from row to row
    // sum of previous row with i and i+1 element of next row
    // number of items must equal number of items in the triangle row
    // always add the lowest number when 2 members are on par


    console.log('debug, triangle', triangle)
    console.log('debug, table', table)
    return Math.min(...table[table.length-1]);
}

console.log('t1: expect 11 / res: ', minimumPathTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log('t2: expect -10 / res: ', minimumPathTotal([[-10]]))