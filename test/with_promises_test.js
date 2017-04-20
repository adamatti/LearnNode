const assert = require('assert'),
	  logic = require("../app/some_logic")

it("simple test with promise", () => {
	return logic.factorialP(9).then( result => {
		assert.equal(result,362880)		
	})
})