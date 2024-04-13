/* 
There are N cities. Some of them are connected, while some are not.
If city A is connected directly with city B, and city B is connected
directly with city C, then A is connected directly with city C.

* A province is a group of directly or indirectly connected cities 
and no other cities outside of the group.
*/

function dfs(node, graph, visited) {
    // if(visited[node]) return;
    visited[node] = true;
    
    for (let neighbour of graph[node]) {
        if (!visited[neighbour]) {
            visited[neighbour] = true;
            dfs(neighbour, graph, visited)
        }

    }

}

function genAdjList(input) {
    const adjList = Array.from({length:input.length}, () => {})
    for(let index=0; index<input.length; index++) {
        let neighbours = []
        for(let j=0; j<input[index].length; j++) {
            if(index === j) continue
            if(input[index][j] === 0) continue
            neighbours.push(j)
        }
        adjList[index] = neighbours
    }
    return adjList
}

function findProvinces(cities) {
    // edge case
    // get adjacency list
    // dfs to count provinces using visited
    // return count of provinces
    const adjList = genAdjList(cities);
    let provinces = 0;
    const visited = {};
    
    for(node in adjList) {
        // console.log('debug, index, visited[i]', node, visited[node])
        if(!visited[node]) {
            provinces++;
            dfs(node, adjList, visited)
        }
    }

    return provinces;
}


console.log('t1: expect: 4 | res: ', findProvinces([[1,1,0,0], [1,1,0,1], [0,0,1,0], [0,1,0,1]]));
console.log('t2: expect: 3 | res: ', findProvinces([[1,0,0], [0,1,0], [0,0,1]]));
console.log('t3: expect: 2 | res: ', findProvinces([[1,1,0], [1,1,0], [0,0,1]]));