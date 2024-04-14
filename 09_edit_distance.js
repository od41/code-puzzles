/* 
    Given two strings word1 and word2, return the minimum umber of operations
    required to convert word1 to word2.

    You have the following operations permitted on a word:
    - insert a char
    - delete a char
    - replace a char
*/

function minDistance(word1, word2) {
    //generate table
    const table = Array.from({length: word1.length+1}, ()=>[])
    for(let row=0;row<table.length; row++) {
        const content = Array.from({length:word2.length+1}, ()=>0)
        table[row] = content
    }

    for(let row=0;row<table.length; row++) {
        table[row][0] = row
        for(let col=0;col<table[row].length; col++) {
            table[0][col] = col
        }
    } 

    for(let row = 1; row<table.length; row++) {
        for(let col = 1; col<table[row].length; col++) {
            if(word1[row-1] === word2[col-1]) {
                // console.log('debug inside ===', row, col, table[row-1][col-1])
                table[row][col] = table[row-1][col-1]
            } else {
                // console.log('debug inside else', row, col, table[row-1][col], table[row][col-1], table[row-1][col-1])
                table[row][col] = 1+ Math.min(table[row-1][col], table[row][col-1], table[row-1][col-1])
            }
        }
    }

    console.log('table after', table)


    return table[table.length-1][table[table.length-1].length-1];
}

console.log('t1: expect 3 / res: ', minDistance('horse', 'ros'))
console.log('t2: expect 5 / res: ', minDistance('intention', 'execution'))