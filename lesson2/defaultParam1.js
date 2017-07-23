// cannot assume userNames will always be assigned
function loadProfiles(userNames) {
  console.log('loading ' + userNames.length + ' profiles')
  // ...
}

loadProfiles(['Sam', 'Tylor', 'Brooke']) // works fine
loadProfiles() // without arguments
loadProfiles(undefined) // with an explict undefined
