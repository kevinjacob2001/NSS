
let EventEmitter =require('events')
let emitter=new EventEmitter()
let Logger=require('./logger')
let logger=new Logger();


logger.on('Logged',(args)=>console.log("Callled"+12))

logger.Logged("Hai")