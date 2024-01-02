// Eventos

const btn = document.getElementById("btn")

function click () {
  console.log("botão!")
}


btn.addEventListener("click", click) 

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click", () => {
  console.log("evento 1 removido")
  btn.removeEventListener("click", click)
})


// Evento com teclado

document.addEventListener("keyup", (e) => {
  console.log(`soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
  console.log(`soltou a tecla ${e.key}`)
})


// Evento com clicks do mouse

document.addEventListener("mousedown", (e) => {
  console.log("clicou")
})

document.addEventListener("mouseup", (e) => {
  console.log("clicou e soltou")
})

document.addEventListener("dblclick", (e) => {
  console.log("double clicks")
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 1000) {
    console.log("passou dos 200")
  }
})

console.log("bugfix")

console.log("error Fixed")
