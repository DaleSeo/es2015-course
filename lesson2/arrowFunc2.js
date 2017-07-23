// ES5 closer

function Person() {
  this.age = 0
  let thisAge = this.age

  setInterval(function () {
    console.log(++thisAge)
  }, 1000)
}

var p = new Person()
