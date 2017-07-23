// Arrow functions bind to the scope of where they are defined, not where they are called.

function Person() {
  this.age = 0

  setInterval(_ => console.log(++this.age), 1000)
}

var p = new Person()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
