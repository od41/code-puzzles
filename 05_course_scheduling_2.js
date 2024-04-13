/* 
    There are a total of n courses you have to take labelled 
    from 0 to n-1.

    Some courses may have prerequesites, for example, if 
    prerequisites[i]=[a,b], this means you must take the course b, 
    before the course a.

    Given the total number of courses numCourses and a list of the
    prerequisit pairs, return the ordering of courses you should take 
    to finish all courses.

    If there are many valid ansers, return any of them. If it is 
    impossible to finish all courses, return an empty array.
*/
function orderDfs(node, adjList, visited, arrive, depart, completionOrder) {
    visited[node] = true;
    arrive[node]++

    for (let neighbour of adjList[node]) {
        console.log('debug: depart', node, neighbour, depart)
        if(!visited[neighbour]) {
            visited[neighbour] = true;

            if(orderDfs(neighbour, adjList, visited, arrive, depart, completionOrder)) return true;
        } else if(depart[neighbour]===0) {
            return true
        }
    }

    depart[node]++
    completionOrder.push(node)
    return false;
}

function canFinish(courses, prerequisites) {
    // edge case
    // if(courses===1 || prerequisites.length===0) {
    //     return [0]
    // }

    // generate adjacency list
    const adjList = Array.from({length: courses}, ()=>[]);
    for(let prereq of prerequisites) {
        let [pre_cou, end_cou] = prereq
        adjList[pre_cou].push(end_cou)
    }

    console.log('adjlist: ', adjList)
    
    const visited = {}
    const arrive = Array.from({length: courses}, ()=>0);
    const depart = Array.from({length: courses}, ()=>0);
    const completionOrder = [];

    for(let node=0; node<adjList.length; node++) {
        console.log('debug, index, visited[i]', node)
        if(!visited[node]) {
            orderDfs(node, adjList, visited, arrive, depart, completionOrder);
        }
    }
    return completionOrder;
}

console.log('t1: expect [0,1] / res: ', canFinish(2, [[1,0]]))
console.log('t2: expect [0,2,1,3] or [ 0, 1, 2, 3 ] / res: ', canFinish(4, [[1,0], [2,0], [3,1], [3,2]]))
console.log('t3: expect [0] / res: ', canFinish(1, []))
console.log('t4: expect [] / res: ', canFinish(2, [[1,0],[0,1]]))