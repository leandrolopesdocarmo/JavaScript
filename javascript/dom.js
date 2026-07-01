// como selecionar por marca
var corpo = window.document.body
var p1 = window.document.getElementsByTagName("p")[0]
window.document.write(p1.innerText)
corpo.style.background = "#bdbdbd"
p1.style.color = 'green'

// scomo selecionar por uma ID
// window.document.getElementById()
// var d = window.document.getElementById('msg')
// d.style.background = 'darkred'
// d.style.color ='white'

// :como selecionar por nome
// var d = window.document.getElementsByName('msg')[0]
// d.innerText ='olá...'

// como selecionar por uma classe
//  window.document.getElementsByClassName('msg')

// Como selecionar pelo seletor--->nova forma de selecionar objetos
var d = window.document.querySelector('div#msg')
d.style.background='blue'

window.document.querySelectorAll('div#msg')

