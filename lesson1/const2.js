function loadProfiles(users) {
  const MAX_USERS = 3
  // const MAX_REPLIES;
  // MAX_USERS = 3;
  if (users.length > MAX_USERS) {
      let loadingMessage = "Loading..."
      console.log('=>', loadingMessage)
  } else {
      let flashMessage = "Done!"
      console.log('=>', flashMessage)
  }
  console.log('after else block:', flashMessage)

  const MAX_REPLIES = 3
  // MAX_REPLIES = 10 // ReferenceError
  if (someValue > MAX_REPLIES) {
    // ...
  }
}

// var users = ['Dale', 'Ben', 'Nate']
var users = ['Dale', 'Ben', 'Nate', 'Charlie']
loadProfiles(users)
