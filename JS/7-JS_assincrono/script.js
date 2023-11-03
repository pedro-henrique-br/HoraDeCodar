// func setTimeOut

// setTimeout(function (){
//   console.log("oi")
// },3000)


// SetInterval

// console.log("setInterval doesnt start")

// setInterval(function(){
//   console.log("setInterval")
// },3000)

// console.log("SetInterval are")


// Promisses

// const promessa = Promise.resolve(5+5)

// console.log("Ola mundo")

// promessa.then(value =>{
//   console.log(`a soma é ${value}`)
//   return value
// })

// .then((value) => value + 5)
// .then((value) => console.log(`agora é ${value}`))


// Falha na promise

// Promise.resolve(4 * "a")
//   .then((n) => {
//     if (Number.isNaN(n)){
//       throw new Error("Invalid value")
//   }
// })
//   .catch((error) => console.log(`A error is executed ${error}`))



// Rejectin Promises

// function checkString(string){
//   return new Promise((resolve, reject) => {
//     if(string <= 11 ){
//       resolve(`${string}`)
//     } else {
//       reject(new Error("Erro"))
//     }
//   })
// }

// const i = checkString(2)
// const e = checkString(20)


// i.then((result) => console.log(`o resultado é ${result}`)).catch ((error) =>
//   console.log(`${error}`))

// e.then((result) => console.log(`o resultado é ${result}`)).catch ((error) =>
//   console.log(`${error}`))



// async functions

// async function escreverComDelay(texto){
//   return texto
// }

// escreverComDelay("oi").then((value) => {
//   console.log(`${value}`)
// })

// console.log("teste")


// Await

function resolverComDelay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(":)")
    }, 200)
  })
}

async function chamadaDaAsync () {
  console.log("Chamando a promisse")
  const result = await resolverComDelay()
  console.log(`O resultado foi completo ${result}`)
}

chamadaDaAsync()