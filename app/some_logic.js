const logger = require("log4js").getLogger("some-logic"),
      Promise = require("bluebird")

function factorial(n){
	if (n==0 || n==1){
		return 1
	} 

	return n * factorial(n-1)
}

function factorialP(n){
	if (n==0 || n==1){
		return Promise.resolve(1);
	} 
	
	return factorialP(n-1)
		.then( result => result * n)
}

module.exports = {
	factorial,
	factorialP
}