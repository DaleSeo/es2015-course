function loadProfiles(users) {
  if (users.length > 3) {
      let loadingMessage = "Loading..."
      console.log('=>', loadingMessage)
  } else {
      let flashMessage = "Done!"
      console.log('=>', flashMessage)
  }
  console.log('after else block:', flashMessage)
}

// var users = ['Dale', 'Ben', 'Nate']
var users = ['Dale', 'Ben', 'Nate', 'Charlie']
loadProfiles(users)
