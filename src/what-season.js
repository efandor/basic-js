const CustomError = require("../extensions/custom-error");

  module.exports = function getSeason(date) {

    if (date === undefined) return "Unable to determine the time of year!";
    if (isNaN(date)) return "Error"; // console.log(Date.prototype.toString.call(new Date()))  a very tricky moment
    let month = date.getMonth();
    switch (true) {
      case month < 2 || month > 10:
        return "winter";
        break;
      case month > 1 && month < 5:
        return "spring";
        break;
      case month > 4 && month < 8:
        return "summer";
        break;
      case month > 7 && month < 11:
        return "autumn";
        break;
      default:
        "Error";
    }
}
