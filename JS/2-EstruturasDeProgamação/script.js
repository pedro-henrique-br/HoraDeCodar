
// Prompt e Alert

// const caixaDeAlerta = prompt("Digite seu nome")
// const CaixaDeMsg = alert(`Seu nome é ${caixaDeAlerta}`)

// console.log(Math.min(2, 4, 1, 9, 0.2))
// console.log(Math.floor(2.73))
// console.log(Math.ceil(4.89))

// If - Else

// const poupanca = 1214.00
// const salario = 1217.23

// if (poupanca > salario) {
//   console.log("salario é maior que a sua poupança")
// }
// else {
//   console.log("sua poupança é maior que o salario")
// }

// if (salario < poupanca) {
//   console.log("!")
// }
// else if (salario <= poupanca) {
//   console.log("vish")
// }
// else {
//   console.log("deu bom")
// }

// While

// let numb = 0;

// while( numb <= 10) {
//   console.log(numb)
//   numb++
// }


// Do While

// let numb = 0;

// do {
//   console.log(numb)
//   numb++
// } while (numb <= 10)


// For

// for(numb = 0; numb <= 10; numb++){
//   console.log(numb)
// }

/* Break */

// for(let x = 10; x >= 1; x--){
//   console.log(x)
  
//   if (x <= 4){
//     break
//   }
// }

/* Continue */

// for(let x = 0; x <= 20; x++){
//   if(x % 2 === 0){
//     console.log(`Numero par ${x}`)
//     continue
//   }
//   console.log(`numero impar ${x}`)
// }

/* Switch Case*/

const softwareEngineer = false;

switch(softwareEngineer) {
  case true :
    console.log("Software Engineer is overrated")
    break 
  case false :
    console.log("Failed")
    break
  default :
  console.log("caiu no default")
}