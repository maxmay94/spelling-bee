let fs = require('fs')

fs.readFile('/Users/test/code/projects/spelling-bee/spelling-bee-front-end/files/6-letter-words-full.txt', function (err, data) {
  if(err) {
    console.log(err)
  }

  let allWords = data.toString().split(' ')
  let words = allWords.filter(n => n).join("',  \n'")

  fs.writeFile('6-letters.txt', words, err => {
    if(err) {
      console.log(err)
    }
  })

  console.log(words)
})