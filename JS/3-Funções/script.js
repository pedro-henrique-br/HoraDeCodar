const divisao = function (x, y) {
  return x / y
}


console.log(divisao(18, 4))


function multiplication (x,y) {
  return x * y
}

console.log(multiplication(2, 5))


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

const numberOfBooks = (total) => {
  console.log(total)
}

numberOfBooks("23 books")


// Arrow Funtion Sem return

const raizQuadrada = (x) => x * x

console.log(raizQuadrada(8))

const division = (y, x) => y / x

console.log(division(25,5))

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


// Recursão

const untilFive = (x, y) => {
  if(x < 5){
    console.log("parei")
  }
  else {
    const e = x - y
    console.log(e)

    untilFive(e,y)
  }
}

untilFive(10, 3)

