// started operating system process
console.log('first')
setTimeout(() => {              //settimeout is asynchronus,so we can offload this callback fn,so executer after console.log('third')
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

//o/p: first,third,second