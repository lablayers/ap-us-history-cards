var fs;

fs = require("fs");

fs.readFile("data.txt", function(err, data) {
  var card, cards, line, lines, result;
  if (err) {
    throw err;
  }
  cards = data.toString().split("\n\n");
  result = [];
  for (card in cards) {
    result.push({
      card: []
    });
    lines = cards[card].toString().split("\n");
    for (line in lines) {
      if (line === 0) {
        result[card]["card"].push({
          title: lines[line]
        });
      } else {
        result[card]["card"].push({
          line: lines[line]
        });
      }
    }
  }
  console.log(JSON.stringify(result));
});
