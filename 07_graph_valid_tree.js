/* 
    Given n nodes from 0 to n-1 and a list of 
    undirected edges(each edge is a pair of nodes), write a function
    to check whether the edges make up a valid tree.
*/

function traverseToFindDuplicateDfs(node, adjList, visited) {

    for(let neighbour of adjList[node]){
        console.log('inside neighbour of adjList[node]', neighbour, adjList[node])
        if(!visited[neighbour]) {
            visited[neighbour] = true;
            console.log('inside !visited[neighbour]', neighbour, visited, traverseToFindDuplicateDfs(neighbour, adjList, visited))
            traverseToFindDuplicateDfs(neighbour, adjList, visited)
            // if(traverseToFindDuplicateDfs(neighbour, adjList, visited)) return true
        } else {
            // returns 
            console.log('inside else visited[neighbour]', neighbour, visited)
            return true
        }
    }
    return false
}

function isBfsCycle(node, adjList, visited, parent) {
    const queue = [node];

    while(queue.length) {
        let current = queue.shift()
        visited[current] = true;
        for(let neighbour of adjList[current]) {
            console.log('visited, loop', neighbour, visited[neighbour], visited)
            if(!visited[neighbour]) {
                // console.log('inside is NOT visited', current, neighbour, parent[current], parent)
                visited[neighbour] = true;
                parent[neighbour] = current;
                queue.push(neighbour)
            } else {
                console.log('inside is already visited', current, neighbour, parent[current], parent)
                if(parent[current] !== neighbour) return true;
            }
        }
    }

    return false
}

function isValidTree(nodes, edges) {
    const adjList = Array.from({length: nodes}, () => [])
    for(let edge of edges) {
        let [src, dest] = edge;
        adjList[src].push(dest);
    }

    const visited = {}
    const parent = {}
    let regions = 0

    console.log('adjlist', adjList)

    for(let index=0; index<adjList.length; index++) {
        if(!visited[index]){
            // visited[index] = true;
            regions++;
            if(regions>1) return false
            if(isBfsCycle(index, adjList, visited, parent)) return false;
        }
    }
    return true;
}

console.log('t1: expect: true | res: ', isValidTree(5, [[0,1], [0,2], [0,3], [1,4]]), ' \n\n');
console.log('t2: expect: false | res: ', isValidTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]]));