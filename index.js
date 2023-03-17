// code your solution here
// Define the `saturdayFun` function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the `mondayWork` function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define the `wrapAdjective` function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Export the functions so they can be used in other files
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  