/* 
Given a string containing just the characters 
'(', ')', '{', '}', '[', ']'. 

Determine if the input string is valid.

An input string is valid if: 
    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
 */

function isValid(s) {
    // handle edge case
    // parantheses reference
    // check string
    // return true if stack is empty
    if(s.length % 2 != 0) return false

    let ref = '(){}[]';
    const stack = []

    for (let index = 0; index<s.length; index++) {
        stack.push(s[index])

        let open = stack[stack.length-2]
        let closed = stack[stack.length-1]

        let current = open + closed

        if(ref.includes(current)) {
            stack.pop()
            stack.pop()
        }
    }

    return stack.length === 0;
}

var isValid2 = function (s) {
    //handle the edge case
    //create a map holding the opening brackets macthed to the closing bracket
    //create a stack to hold the opening bracket
    //loop through s and check if the bracket in the stack matches the current bracket
    //if not push item to the stack
    if(s.length % 2 != 0) return false

    const ref = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    const stack = []

    for (let index=0; index<s.length; index++) {
        let current = s[index]
        console.log('debug: stack', current)

        if(current === ref[stack[stack.length-1]]){
            stack.pop()
        } else {
            stack.push(current)
        }
    }

    console.log('debug: stack', stack)

    return stack.length === 0;

}

console.log('t1: expect true / res: ', isValid2('()'))
console.log('t2: expect true / res: ', isValid2('()[]{}'))
console.log('t3: expect false / res: ', isValid2('{]'))
console.log('t4: expect false / res: ', isValid2('{[}]'))
console.log('t5: expect true / res: ', isValid2('{[]}'))