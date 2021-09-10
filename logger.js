let EventEmitter =require('events')
let emitter=new EventEmitter()

class Logger extends EventEmitter {
     Logged(msg){
        console.log(msg)
    
        this.emit("Logged",["Kevin","Jacob"])
    }
    
}



module.exports = Logger;