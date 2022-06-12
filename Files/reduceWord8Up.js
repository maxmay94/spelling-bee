let fs = require('fs')

fs.readFile('/Users/test/code/projects/spelling-bee/spelling-bee-front-end/files/9-letter-words-full.txt', function (err, data) {
  let allWords = data.toString().split(' ')
  let words = []

  if(err) {
    console.log(err)
  }

  
  allWords.forEach(word => {
    let chars = []
    for(let i = 0; i < word.length; i++) {
      if(!chars.includes(word[i])) {
        chars.push(word[i])
      }
    }
    if(chars.length <= 7) {
      words.push(word)
    }
  })

  words = words.filter(n => n).join("',  \n'")

  fs.writeFile('9-letters.txt', words, err => {
    if(err) {
      console.log(err)
    }
  })

  console.log(words)
})


// https://www.bestwordlist.com/