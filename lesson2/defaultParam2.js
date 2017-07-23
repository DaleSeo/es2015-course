// Default parameter values help move default values from the function body to the function signature
function loadProfiles(userNames = []) {
  console.log('loading ' + userNames.length + ' profiles')
  // ...
}

loadProfiles(['Sam', 'Tylor', 'Brooke']) // works fine
loadProfiles() // without arguments
loadProfiles(undefined) // with an explict undefined
