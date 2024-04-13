function mostRepeated(s: string): string {
    let countTracker = {}
    let highestCountChar
    let highestCount = 0
    let it = s[Symbol.iterator]()
    let currentChar = it.next()
    while(!currentChar.done) {
      if(currentChar.value.match(/[A-Z|a-z]/i)){
        if(countTracker[currentChar.value]>0) {
          countTracker[currentChar.value] = countTracker[currentChar.value] + 1;
        } else {
          countTracker[currentChar.value] = 1
        }
      }
      if(countTracker[currentChar.value] > highestCount) {
        highestCountChar = currentChar.value
        highestCount = countTracker[currentChar.value] 
      }
      currentChar = it.next()
    }
    
    return highestCountChar
  }
  
  const res = mostRepeated("abcddefda1111133333333");
  console.log('res', res)
  
  const res2 = mostRepeated("AA0AB0BB0ccc0aa0aw00wo0BBBw123123");
  console.log('res', res2)
  
  // const res = mostRepeated("abcddefda1111133333333");
  // console.log('res', res)
  
  // const res = mostRepeated("abcddefda1111133333333");
  // console.log('res', res)