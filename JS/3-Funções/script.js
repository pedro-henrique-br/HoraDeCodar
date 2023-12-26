// Função 

const divisao = function (x, y) {
  return x / y
}


console.log(divisao(18, 4))


function multiplication (x,y) {
  return x * y
}

console.log(multiplication(2, 5))


const add = function (x,y,e){
  return x + y + e
}

console.log(add(1,1,1))

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

const user = (user) => {
  console.log(user)
}

user("Pedro")

// Arrow Funtion Sem return

const raizQuadrada = (x) => x * x

console.log(raizQuadrada(8))

const division = (y, x) => y / x

console.log(division(25,5))

// valor default

const customText = (name,  greet = "Good morning") => {
  return `${greet}, ${name}`
}

console.log(customText("João", "good afternoon"))
console.log(customText("pedro"))


// Closure 

function imprimir () {
  let texto = "Good morning" 

  function reut () {
    console.log(texto)
  }

  reut()
}

imprimir()

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m 
  }
}

const c1 = multiplicationClosure(5)
const c2 = multiplicationClosure(5)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))


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

