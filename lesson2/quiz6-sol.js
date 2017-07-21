/*
Refactor the code on the right to use rest parameters instead of the arguments object.
*/

function appendUserNames(...userNames){
  const USER_CLASS = "forum-user"
  let userNameDivs = ""

  for (let i in userNames) {
    let name = userNames[i];
    userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>\n";
  }

  return userNameDivs;
}

let html = appendUserNames('Dale', 'Nate', 'Ben')
console.log(html)
