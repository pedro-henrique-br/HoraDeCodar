// Methods

const fruits = {
  name : "orange",
  color : "orange",
  price : "$3,99 - Kg",
  sell : function () {
    console.log(`${fruits.name} ${fruits.price}`)
  }
}

console.log(fruits.name)

fruits.sell()

// Methods 2

const person = {
  personName : "Danilo", 

  getPersonName : function () {
    return this.personName
  },

  newName : function (novoNome) {
    this.nome = novoNome
    return this.nome
  }
}

console.log(person.personName)
console.log(person.getPersonName())
console.log(person.newName("Pedro"))


// Prototype 

const arr = new Array ([{
  centimetros : "100.000",
  metros : "1.000"
}])

arr.concat(person)

console.log(arr)

const objs = {car : "Gol mkv"}

const carr =  Object.create(objs)

console.log(carr.car)
console.log(objs.car)

console.log(Object.getPrototypeOf(objs === carr))

// Classes básicas

