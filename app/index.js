const logger = require("log4js").getLogger("index"),
      logic = require("./some_logic"),
      Promise = require("bluebird"),
      _ = require("lodash")

/*
for(var i=0;i<10;i++){
	logger.debug(i + " => " + logic.factorial(i))
}
*/


return Promise.map(_.range(10), i => {
	return logic.factorialP(i).then( result => {
		logger.debug(i + " => " + result)
	})
})

