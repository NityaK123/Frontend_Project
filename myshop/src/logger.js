class Logger{
    constructor(){
        this.level = "info"
        this.message = ""
    }

    Error(error){
        this.level = "error"
        this.message = error
    }

    Info(info){
        this.level = "info"
        this.message = info
    }
    
    Warning(warn){
        this.level = "warn"
        this.message = console.warn
    }

    Message(){
        console.log(this.message)
    } 
}

const logger = new Logger("info");
export default logger;

