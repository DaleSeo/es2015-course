var name = 'Dale'
console.log('Outside function:', name)

function change() {
  var name = 'Ben'
  console.log('Inside function:', name)
}

change()
console.log('Outside function:', name)


// var name = 'Dale'
// console.log('Outside block:', name)
//
// if (true) {
//   var name = 'Ben'
//   console.log('Inside block:', name)
// }
//
// console.log('Outside block:', name)
