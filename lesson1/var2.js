function fetchProfiles(users) {
  if (users.length > 3) {
      var loadingMessage = "Loading..."
      console.log('=>', loadingMessage)
  } else {
      var flashMessage = "Done!"
      console.log('=>', flashMessage)
  }
  console.log('after else block: ' + flashMessage)
}

// var users = ['Dale', 'Ben', 'Nate']
var users = ['Dale', 'Ben', 'Nate', 'Charlie']
fetchProfiles(users)
