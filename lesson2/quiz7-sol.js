/*
We can pass userNames as an argument to the appendUserNames() function.
However, this variable is an array while the appendUserNames() function expects individual arguments.
Change the call to appendUserNames() to use the syntax that will split the array into individual elements.
*/

let userNames = ['Dale', 'Nate', 'Ben']
let html = appendUserNames(...userNames)
console.log(html)

function appendUserNames(...userNames){
  const USER_CLASS = "forum-user"
  let userNameDivs = ""

  for (let i in userNames) {
    let name = userNames[i];
    userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>\n";
  }

  return userNameDivs;
}
