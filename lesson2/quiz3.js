/*
Let's refactor the loadProfiles() function to use named parameters with default values.
*/

function loadProfiles(userNames = [], options = {}) {
  let profilesClass = options.profilesClass || ".user-profile";
  let reverseSort   = options.reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}

loadProfiles()
