fs = require("fs")
fs.readFile "data.txt", (err, data) ->
  throw err  if err
  cards = data.toString().split("\n\n")
  result = []
  for card of cards
    
    # console.log(card[i]);
    # console.log("----");
    result.push card: []
    lines = cards[card].toString().split("\n")
    for line of lines
      if line is 0
        
        # console.log("Title: " + line + lines[line]);
        result[card]["card"].push title: lines[line]
      else
        
        # console.log("Line: " + line + lines[line]);
        result[card]["card"].push line: lines[line]
  console.log JSON.stringify(result)
  return