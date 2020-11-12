// Function Expression
var canada = () => console.log('cold')
// Function Declaration
function india() {
  console.log('warm')
}

// Function Invocation, Calling, Execution
canada()
india()

function india() {
  console.log(arguments)
  console.log('warm')
}

india()

//arguments
function marry(person1, person2) {
  console.log(arguments)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

function marry2(...args) { //rest parameter
  console.log('arguments', args)
  console.log(Array.from(arguments))
  return `${args[0]} is now married to ${args[1]}`
}

marry('Tim', 'Tina')
