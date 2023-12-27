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
console.log(Object.getPrototypeOf(objs))

// Basics classes

function criarMusica (estilo, tamanho) {
  const musica = Object.create({})
  this.estilo = estilo
  this.tamanho = tamanho

  return estilo + " " + tamanho
}

console.log(criarMusica("rock", "2:34"))

function criarUsuario (email, senha){
  const usuario = Object.create({})
  this.email = email
  this.senha = senha

  return email + " / " + senha
}


// Constructor functions

const userPedro = new criarUsuario("pedro011@gmail.com", "10082005@")

console.log(userPedro)

const copiarMusica = new criarMusica("Pagode", "sertanejo")

console.log(copiarMusica)


// Funtion classes with methods

criarMusica.prototype.views = function () {
  console.log("342.691" +" "+ "views!!")
}

console.log(criarMusica.prototype)

copiarMusica.views()

console.log(copiarMusica)

// Classes es6

class musicInfo {
  constructor(tipo) {
    this.tipo = tipo
  }
}

const music = new musicInfo("Brega funk")

console.log(Object.getPrototypeOf(musicInfo))

musicInfo.vocalist = "Gustavo lima"

console.log(musicInfo)

musicInfo.prototype.oldVocalist = "Belo"

const newVocalist = new musicInfo("the weekned")

console.log(newVocalist.oldVocalist)

// Override 
 
class carro {
  constructor(marca, tipo){
    this.marca = marca
    this.tipo = tipo
  }
}

const supra = new carro ("Toyota", "Corolla")

console.log(supra)

carro.prototype.cor = "branco"

console.log(carro.prototype.cor) 

console.log(supra.cor)


// Symbol in classes

class moto {
  constructor(marca, cilindradas){
    this.marca = marca 
    this.cilindradas = cilindradas
  }
}

const rodas = Symbol()

moto.prototype[rodas] = "BBS 17"


const kawazaki = new moto("kawazaki", "1000cc")

console.log(kawazaki)

console.log(kawazaki[rodas])


// Getter e setter 

class honda {
  constructor(modelo, cavalariaDoMotor, cor){
    this.modelo = modelo 
    this.cavalariaDoMotor = cavalariaDoMotor
    this.cor = cor
  }

  get exibirModelo () {
  return `O modelo do honda é ${this.modelo}`
  }

  set adicionarModelo (modelo) {
    const carrosArray = modelo.split(", ")
    this.modelo = carrosArray
  }
}

const myHonda = new honda ("Nsx", "137cv")

console.log(myHonda.exibirModelo)

honda.adicionarModelo = ["Civic", "Civic type R"]

console.log(honda)


// Operador istance of

console.log(myHonda instanceof honda)
console.log(new honda ("Nsx", "137") instanceof moto)
console.log(supra instanceof honda)


// Herança 

class cachorro {
  constructor (patas) {
    this.patas = patas
  }
}

class lobo extends cachorro {
  constructor(patas, nome){
    super(patas, patas)
    this.nome = nome
  }
}


const rex = new lobo ("4" , "rex")

console.log(rex.nome)

console.log(lobo)
console.log(cachorro)
