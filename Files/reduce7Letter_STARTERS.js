let fs = require('fs')

fs.readFile('7-letter-words-full.txt', function (err, data) {
  let allWords = data.toString().split(' ')
  let words = []

  if(err) {
    console.log(err)
  }

  allWords.forEach(word => {
    for(let i = 0; i < word.length; i++) {
      if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
        word = ''
      }
    }
    words.push(word)
  })

  words = words.filter(n => n).join("',  \n'")

  fs.writeFile('7-letters-adjusted.txt', words, err => {
    if(err) {
      console.log(err)
    }
  })

  console.log(words)
})