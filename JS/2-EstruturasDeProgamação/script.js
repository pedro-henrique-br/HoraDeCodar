// Condicionais (Estruturas de condição)
// IF

const user = "Pedro"

if(user === "Pedro"){
  console.log(`Olá ${user}`)
}

if(user === "Maria"){
  console.log(`Olá ${user}`)
}

console.log(user === "Pedro", user === "Maria")

// Else

const signIn = false

if(signIn){
  console.log("Usuario existente")
} else {
  console.log("Usuario não encontrado")
}

const x = 10  
const y = 11

if(x > 11 && y > x){
  console.log("Certo")
} else {
  console.log("Errado")
}

// Else If

if (1 > 2) {
  console.log("Teste")
} else if (2 > 3){
  console.log("Teste 2")
} else if (5 > 1){
  console.log("passou")
}


const userLogin = "MatheusTeodoro14_"
const userPassword = "mt14_"

if(userLogin === "matheus_zin"){
  console.log("Usuario não encontrado")
} else if(userPassword === "mt14_" && userLogin === "matheus_zin") {
  console.log("Usuario não encontrado")
} else {
  console.log("Tente novamente")
}


// Estruturas de repetição
// While

let numero = 0

while(numero <= 5){
  console.log(`${numero}`)
  numero++
}

// Do While

numero = 0

do {
  console.log(`Valor de ${numero}`)
  numero++
} while (numero < 10)


// For 

for(let numero = 0; numero < 5; numero++){
  console.log(`Repetindo...`)
}

for(let numero = 10; numero > 0; numero--){
  console.log(`Decrementando...`)
}

for(let numero = 10; numero < 20; numero--){
  console.log(numero)
  if(numero == 8){
    console.log("Break")
    break
}} 


// Switch - Case (Organização de um excesso de if/else)

const job = "Professor"

switch(job){
  case "Progamador" :
    console.log("Você é um progamador!")
    break
  case "Advogado" :
    console.log("Você é um advogado!")
    break
  case "Professor" :
    console.log("Você é um Professor!")
    break
  default:
    console.log("Você ainda não informou sua profissão")
}


switch(job){
  case "Progamador" :
    console.log("Você é um progamador!")
    break
  case "Advogado" :
    console.log("Você é um advogado!")
    break
  case "Analista de dados" :
    console.log("Você é um Analista de dados!")
    break
  default:
    console.log("Você ainda não informou sua profissão")
}