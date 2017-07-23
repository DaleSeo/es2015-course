// The options object makes it hard to know what options a funciton accepts
function setPageThread(name, options) {
  // boilerplate code: assign from properties to local variables
  let popular = options.popular
  let expires = options.expires
  let activeClass = options.activeClass
  // ...
  console.log('Name:', name)
  console.log('Popular:', popular)
  console.log('Expires:', expires)
  console.log('ActiveClass:', activeClass)
}

setPageThread('New Version out Soon!', {
  popular: true,
  expires: 10000,
  activeClass: 'is-page-thread'
})
