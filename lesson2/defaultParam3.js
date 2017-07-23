// A common practice is to check for presence of arguments as the very first thing in the function.
function loadProfiles(userNames) {
  if (typeof userNames === 'undefined') {
    userNames = [] // Too verbose and doesn't sacle well for multiple arguments
  }
  console.log('loading ' + userNames.length + ' profiles')
  // ...
}

loadProfiles(['Sam', 'Tylor', 'Brooke']) // works fine
loadProfiles() // without arguments
loadProfiles(undefined) // with an explict undefined
