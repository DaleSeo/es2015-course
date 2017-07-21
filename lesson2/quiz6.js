/*
Refactor the code on the right to use rest parameters instead of the arguments object.
*/

function appendUserNames(){
  const USER_CLASS = "forum-user"
  let userNameDivs = ""

  for (let i in arguments) {
    let name = arguments[i];
    userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>\n";
  }

  return userNameDivs;
}

let html = appendUserNames('Dale', 'Nate', 'Ben')
console.log(html)
