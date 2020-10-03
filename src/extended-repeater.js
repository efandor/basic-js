const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let outputString;

  if (options.addition !== undefined) {
      let additionString = options.addition;

      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
          additionString += `${options.additionSeparator}${options.addition}`;
      }
      outputString = `${str}${additionString}`;

      for (let i = 0; i < options.repeatTimes - 1; i++) {
          outputString += `${options.separator}${str}${additionString}`;
      }
  } else {
      outputString = `${str}`;

      if (options.separator !== undefined) {
        for (let i = 0; i < options.repeatTimes - 1; i++) {
          outputString += `${options.separator}${str}`;
      }
      } else {
                for (let i = 0; i < options.repeatTimes - 1; i++) {
                outputString += `+${str}`;
              } 
      } 
  }
return outputString;
};

