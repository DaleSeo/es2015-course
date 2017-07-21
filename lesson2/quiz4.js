/*
Take the following function:
*/

function fetchReplies(topicId, { displayClass, includeAvatar }){
  //...
  // console.log('topicId:', topicId)
  // console.log('displayClass:', displayClass)
  // console.log('includeAvatar:', includeAvatar)
}

/*
Mark all the possible ways this function can be invoked without generating an error.
*/

// #1
fetchReplies(12, {
  displayClass: 'topic-replies'
})

// #2
let options = {
  displayClass: 'topic-replies',
  includeAvatar: false
}

fetchReplies(12, options)

// #3
fetchReplies(12)
