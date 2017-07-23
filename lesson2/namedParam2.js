// Using named parameters for optional settings makes it easier to understand how a function should be invoked
function setPageThread(name, {popular, expires, activeClass}) {
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

// It’s okay to omit some options when invoking a function with named parameters.
setPageThread('New Version out Soon!', {
  popular: true
})

// It’s NOT okay to omit the options argument altogether when invoking a function with named parameters when no default value is set for them.
setPageThread('New Version out Soon!')
