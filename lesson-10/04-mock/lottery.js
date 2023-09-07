const generateNumber = require("./generateNumber");

function lottery(expect) {
  const actual = generateNumber();

  if (actual !== expect) {
    return "You lost:(";
  }

  return "$$$ You win! $$$";
}

module.exports = lottery;
