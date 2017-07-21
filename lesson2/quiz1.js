/*
The function printNumTopics() raises an error on the very first line when called with no arguments.
Let's fix that!
*/

function printNumTopics(topics){
  let message = 'There are currently ' + topics.length + ' topics';
  console.log(message)
}

printNumTopics(['Songs', 'Lyrics'])
printNumTopics()
printNumTopics(undefined)
