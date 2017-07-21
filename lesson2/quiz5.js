/*
Take the following function, which sets a default value for the second parameter:
*/

function setPageThread(name, {popular, expires, activeClass} = {}){
  // ...
  console.log('name:', name)
  console.log('popular:', popular)
  console.log('expires:', expires)
  console.log('activeClass:', activeClass)
}

/*
Mark all the possible ways this function can be invoked without generating an error.
*/

// #1
setPageThread('ES2015', {
  popular: true
})

// #2
setPageThread('ES2015', {})

// #3
setPageThread('ES2015')
