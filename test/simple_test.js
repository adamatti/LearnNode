const assert = require('assert'),
	  logic = require("../app/some_logic")

it("simple test", () =>{
	assert(logic.factorial(9),362880)
})