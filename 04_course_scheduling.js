/* 
    There are a total of numCourses courses you have to take labeled
    from 0 to numCourses - 1. Some courses may have prerequisites, for example
    to take "course 0" you have to first take "course 1", which is expressed
    as a pair: [0,1]. Given the total number of courses and a list of 
    prerequisite pairs, is it possible for you to finish all courses?
*/
function hasCycleDfs(node, adjList, visited, arrive, depart) {
    arrive[node]++;
    visited[node] = true;

    for (let neighbour of adjList[node]) {
        if(!visited[neighbour]) {
            visited[neighbour] = true;

            if(hasCycleDfs(neighbour, adjList, visited, arrive, depart)) return true;
        } else {
            if(depart[neighbour] === 0) return true;
        }
    }

    depart[node]++;
    return false;
}

function canFinish(courses, prerequisites) {
    // generate adjacency list
    const adjList = Array.from({length: courses}, ()=>[]);
    for(let prereq of prerequisites) {
        let [pre_cou, end_cou] = prereq
        adjList[pre_cou].push(end_cou)
    }
    
    const arrive = Array.from({length: courses}, ()=>0);
    const depart = Array.from({length: courses}, ()=>0);
    const visited = {}

    for(let node=0; node<adjList.length; node++) {
        console.log('debug, index, visited[i]', node, visited[node])
        if(!visited[node]) {
            if(hasCycleDfs(node, adjList, visited, arrive, depart)) return false;
        }
    }
    return true;
}

console.log('t1: expect true / res: ', canFinish(2, [[1,0]]))
console.log('t2: expect false / res: ', canFinish(2, [[1,0], [0,1]]))
// console.log('t3: expect false / res: ', canFinish([]))