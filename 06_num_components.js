/* 
    Given n nodes labeled from 0 to n-1 and a list of undirected edges
    (each edge is a pair of nodes), write a function to find the number
    of connected components in an undirected graph.

*/

function countConnectionsDfs(node, adjList, visited) {
    visited[node] = true;

    for(let neigbour of adjList[node]) {
        if(!visited[neigbour]) {
            visited[neigbour] = true;
            countConnectionsDfs(neigbour, adjList, visited)
        }
    }
}

function countComponents(nodes,input) {
    let count = 0;
    const adjList = Array.from({length:nodes}, () => [])
    for(let pair of input) {
        let [src, dest] = pair
        adjList[src].push(dest)
        adjList[dest].push(src)
    }

    const visited = {}



    for(let index=0; index<adjList.length; index++) {
        if(!visited[index]) {
            count++
            countConnectionsDfs(index, adjList, visited)
        }
    }
    return count
}

console.log('t1: expect: 2 | res: ', countComponents(5, [[0,1], [1,2], [3,4]]));
console.log('t2: expect: 1 | res: ', countComponents(5, [[0,1], [1,2], [2,3], [3,4]]));
console.log('t3: expect: 3 | res: ', countComponents(3, [[1,0,0], [0,1,0], [0,0,1]]));
