function hasCycleBfs(node, graph, visited, distance) {
    const queue = [node]
    distance[node] = 0
    visited[node] = true
    while(queue.length) {
        const current = queue.shift();
        for (let neighbour of graph[current]) {
            if(!visited[neighbour]) {
                visited[neighbour] = true
                distance[neighbour] = distance[current] + 1;
                console.log('inside NOT visited', distance[neighbour], distance[current])
                queue.push(neighbour)
                
            } else {
                console.log('inside visited', distance[neighbour], distance[current])
                if(distance[neighbour] === distance[current]) return false;
            }
            console.log('bfs neighbour loop, distance', neighbour, current, distance[neighbour], distance[current], distance)
        }
    }
    
    return true

}

function bipartiteGraph(graph) {
    // you're looking for an even number of cycles, 
    // that indicates it's not bipartite
    // otherwise, it is bipartite
    const visited = {}
    const distance = {}

    for (let index=0; index<graph.length; index++) {
        if(!visited[index]) {
            if(hasCycleBfs(index, graph, visited, distance)) return true
        }
    }

    // odd number means bipartite
    // even number means not bipartite

    return false
}

console.log('t1: expect true / res: ', bipartiteGraph([[1,3],[0,2],[1,3],[0,2]]))
console.log('t2: expect false / res: ', bipartiteGraph([[1,2,3],[0,2],[0,1,3],[0,2]]))