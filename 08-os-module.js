const os=require('os')   //since it is built-in module we are not using ./

//ifo about current user

const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`system uptiem is ${os.uptime}`)

const currenOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currenOS)
