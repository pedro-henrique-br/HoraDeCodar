// 'Strict mode'

// opa = "teste"

// const undefined = "1"


// Depurar com console.log

let x = 2

console.log(x)

if(x > 1){
  x--
}

console.log(x)

if(x > 1) {
  console.log(x)
}

// Debugger 

let u = 2
let y = 3

if(i => y){
  console.log(u)
}

// debugger

// for(u = 0; u <= 10; u++){
//   console.log(u)
// }

// Exceptions

// let i = 10 

// if(i != 11 ){
//   throw new Error("x nao é maior que 11")
// }

// Try e Catch

// try {
//   const e = p + o
// } catch(error){
//   console.log(error)
// }

// Finally

try {
  const value = checkNumber("asda")

  if(!value){
    throw new Error ("invalido")
  }
} catch(error) {
  console.log(error)
} finally {
  console.log("codigo executado")
}



