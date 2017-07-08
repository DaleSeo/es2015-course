function findUser(id, cb) {
  setTimeout(function() {
    var fakeUser = {
      id: id,
      name: 'Joe#' + id,
      email: id + '@ltcs.com'
    }
    cb(fakeUser)
  } ,1000)
}

function findUsers(userIds) {
  for (let i in userIds) {
    findUser(userIds[i], function (user) {
      console.log('Found for id,', userIds[i])
      console.log('=> A user founded:', user)
    })
  }
}

findUsers([3, 7, 29, 105])
