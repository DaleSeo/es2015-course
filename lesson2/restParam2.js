displayTags('songs')
displayTags('songs', 'lyrics')
displayTags('songs', 'lyrics', 'bands')

// The new rest parameter syntax allows us to represent an indefinite number of arguments as an Array.
function displayTags(...tags) {
  // tags is an array
  for (let i in tags) {
    let tag = tags[i]
    _addToTopic(tag)
  }
}

function _addToTopic(tag) {
  console.log('adding', tag)
  // ...
}
