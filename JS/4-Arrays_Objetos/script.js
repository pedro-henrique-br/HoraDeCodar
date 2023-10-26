// // array () constructor

// let arr = new Array (" Pedro", " Clevao", " Leo, ")

// console.log(arr.length)

// // Propriedades

// let numbers = [3, 2, 4]


// // métodos

// console.log(arr.sort())
// console.log(numbers.sort())

// object literals 

// const pacients = {
//   name : "adrian",
//   age : "12",
//   user : "adrian12"
// }

// console.log(pacients)

// console.log(Object.keys(pacients))

// push e pop

let popPush = ["pedro", "matheus" , "joao"]

let removed = popPush.pop()

console.log(popPush)

console.log(removed)


popPush.push("joao")
console.log(popPush)

popPush.shift()

console.log(popPush)

popPush.unshift()

// Trim

const trimTest = "teste\n"

console.log(trimTest.length)

console.log(trimTest.trim().length)


// Padstart

const testPadStart = "2"

const newUser = testPadStart.padStart(8, "01")

console.log(newUser)


// slipt 

const wordPad = "The impost in brazil is like 103% of the product price $ \n"

const arrayWordPad = wordPad.split(" ")

console.log(arrayWordPad)

// Join

console.log(arrayWordPad.join(" "))

const itens = ["pneu", "motor", "cilindro da correia"]

const itensToBuy = itens.join(", ")

console.log(itensToBuy)

// repeat

const wordRepeat = wordPad.repeat(3)

console.log(wordRepeat)


// Rest Operator / Rest Parameters

function soma (...values) {
  let lengthValue = values.length
  let total = 0
  for(let x = 0; x < lengthValue; x++){
    total += values[x]
  }
  return total
}

console.log(soma(100, 104, 213, 123))

// for of 

function soma2 (...values) {
  let total = 0
  for(num of values)
  total += num
return total
}

console.log(soma2(2,1,1,34,12,5))