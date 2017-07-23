// ES5 bound function

function Person() {
  this.age = 0

  setInterval((function () {
    console.log(++this.age)
  }).bind(this), 1000)
}

var p = new Person()
