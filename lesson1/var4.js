function findUsers(userIds) {
  for (var i in userIds) {
    findUser(userIds[i], function (user) {
      console.log('A user found at index', i)
      console.log(user)
    })
  }
}

function findUser(id, cb) {
  setTimeout(function () {
    var fakeUser = {
      id: id,
      name: 'Joe#' + id,
      email: id + '@ltcs.com'
    }
    cb(fakeUser)
  } ,1000)
}

findUsers([3, 7, 29, 105])
