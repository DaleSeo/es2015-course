// The spread operator allows us to split an Array argument into individual elements.
let tags = ['songs', 'lyrics', 'bands']
displayTags(...tags) // Function invocation

// Function definition
function displayTags(...tags) {
  for (let i in tags) {
    let tag = tags[i]
    _addToTopic(tag)
  }
}

function _addToTopic(tag) {
  console.log('adding', tag)
  // ...
}
