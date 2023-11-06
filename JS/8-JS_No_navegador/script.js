console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[1].textContent)



const btn = document.getElementsByTagName('a')

console.log(btn)


const nav = document.getElementById('nav')

console.log(nav)


const img = document.getElementsByClassName('img')

console.log(img)

const button = document.querySelectorAll("nav ul")

console.log(button)


const h1 = document.createElement("h1")

console.log(h1)


const li = document.createElement("li")


nav.appendChild(li)

const myText = document.createElement("h1")

const myTextContent = document.createTextNode("Support")

myText.appendChild(myTextContent)

console.log(myText)

document.body.appendChild(myText)


// atributos

const firstLink = nav.querySelector("a")

console.log(firstLink.textContent)

firstLink.setAttribute("href", "https://www.youtube.com.br")

firstLink.setAttribute("target", "blank")


// ALTURA E LARGURA

console.log(nav.offsetHeight)
console.log(nav.offsetWidth)

// Css com Js

nav.style.backgroundColor = "#eaf"
firstLink.style.color = "#eaf"

// Alterando o estilos de varios elementos

for(li of nav) {
  nav.style.backgroundColor = "#ffff"
}