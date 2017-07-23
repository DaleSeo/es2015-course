// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function Person() {
  this.age = 0

  setInterval(function () {
    console.log(this)
  }, 1000)
}

var p = new Person()
