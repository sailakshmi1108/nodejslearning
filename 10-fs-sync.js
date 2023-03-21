//synchronous approach

const {readFileSync,writeFileSync}=require('fs')
console.log('start') //1st
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)

// writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`)

writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`,{flag:'a'})
//will append
//can't override

console.log('done')  //2nd
console.log('next') //3rd line by line synchronous
