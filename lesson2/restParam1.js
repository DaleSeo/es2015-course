displayTags('songs')
displayTags('songs', 'lyrics')
displayTags('songs', 'lyrics', 'bands')

// The arguments object is a built-in, Array-like object that corresponds to the arguments of a function.

// Hard to tell which parameters this function expects to be called with
function displayTags() {
  // Where did this come from?!
  for (let i in arguments) {
    let tag = arguments[i]
    _addToTopic(tag)
  }
}

function _addToTopic(tag) {
  console.log('adding', tag)
  // ...
}
