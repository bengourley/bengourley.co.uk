if (!console) return

console.log('Hello there traveller. Opened up my console have we?')
console.log('Perhaps you would like to play a game… type "yes()" or "no()"')

function yes() {
  setTimeout(console.log.bind(console, '…right, got it. I’ve hidden a pink pixel on the page.'), 1500)
  setTimeout(console.log.bind(console, 'All you’ve got to do is click it.'), 2500)
  var d = document.createElement('div')
  d.setAttribute('style', 'position:fixed;top:' + window.innerHeight * Math.random() + 'px;left:' + window.innerHeight * Math.random() + 'px;height:1px;width:1px;background:pink')
  d.addEventListener('click', function () {
    console.log('YOU WIN! CONGRATS! BEST GAME EVER?')
    setTimeout(console.log.bind(console, 'again() ?'), 1500)
    d.remove()
    window.again = yes
  })
  document.body.appendChild(d)
  delete window.yes
  delete window.no
  return 'Excellent, let me think of something.'
}

function no() { return 'No? Very well, bore.' }

window.yes = yes
window.no = no
