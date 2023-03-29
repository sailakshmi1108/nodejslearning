const { readFile, writeFile } = require('fs')

console.log('start')   //1st
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        // console.log(result)
        console.log("done")    //3rd
      }
    )
  })
})
console.log("next")  //2nd..asynch-  we just off load the "readfile" and continue with code. so other users can use the application code
