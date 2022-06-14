let fs = require('fs')

fs.readFile('/Users/test/code/projects/spelling-bee/spelling-bee-front-end/files/7-letter-words-full.txt', function (err, data) {
  let allWords = data.toString().split(' ')
  let words = []

  if(err) {
    console.log(err)
  }

  allWords.forEach(word => {
    for(let i = 0; i < word.length; i++) {
      if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
        word = ''
      } else {
        word = word.split('').sort().join('')
      }
    }
    if(!words.includes(word) && word !== '') {
      words.push(word)
    }
  })

  words = words.sort().join("',  \n'")


  fs.writeFile('STARTERS.txt', words, err => {
    if(err) {
      console.log(err)
    }
  })
})