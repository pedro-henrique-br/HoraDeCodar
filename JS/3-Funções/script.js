const divisao = function (x, y) {
  return x / y
}

console.log(divisao(18, 4))

// Escopo aninhado

let x = 4

function escopoAninhado () {
  let x = -3
  console.log(x)

  if(true) {
    let x = 9
    console.log(x)
  }
}

escopoAninhado()


// Arrow Function

const arrFnct = (name) => {
  console.log(name)
}

arrFnct("pedro")

// Arrow Funtion Sem return

const raizQuadrada = (x) => x * x

console.log(raizQuadrada(8))

// valor default

const customText = (name,  greet = `Hi ${name}, Good morning`) => {
  return greet
}

console.log(customText("pedro"))

function imprimir () {
  let texto = "Good morning" 

  function reut () {
    console.log(texto)
  }

  reut()
}

imprimir()