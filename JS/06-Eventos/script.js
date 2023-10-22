
function randomNumber () {
  let numero = 2 
  return Math.ceil(Math.random(numero) * 255)
}

function randomColor () {
  setInterval(() => {
  let rgb = ("rgb"+"("+ randomNumber()+ "," + randomNumber() + "," + randomNumber() + ")")
    document.body.style.background = rgb
  }, 150);
 }

function button () {
  randomColor()
}

