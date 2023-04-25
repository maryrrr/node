const Logger = require('logplease')
const logger = Logger.create('utils')
exports.num_par = (...num) => {
    const par=num.filter((arg)=> {
        if (arg%2==0){
            return logger.debug("El numero es par")
        }else{
            return logger.error("El numero es impar")
     }
    })
}


