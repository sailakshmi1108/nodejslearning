// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter=require('events')
const customEmitter=new EventEmitter()    //for custom event,we have to instance the class(EventEmitter)

// customEmitter.on('response',()=>{
//   console.log('data received')
// })
// customEmitter.on('response',()=>{
//   console.log('data received')
// })

// customEmitter.emit('response')
customEmitter.on('response',(name,id)=>{
  console.log(`data received ${name} with id:${id}`)
})
customEmitter.on('response',()=>{
  console.log('data received')
})

customEmitter.emit('response')
customEmitter.emit('response','santhosh',25)  //we can pass the parameters ,by passing them as arguments to the "on" method