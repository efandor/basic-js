const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let teamName = [];
    if (!Array.isArray(members)) {
      return false;
    } else {
      members.forEach(elem => {typeof(elem) === "string" ? teamName.push(elem.trim().toUpperCase()[0]) : false})
    }
  return teamName.sort().join('')
 }