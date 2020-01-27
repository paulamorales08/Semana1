
function calcularValorGasolina(cantidadGalones, nombreDia, horaDeLlegada) {
  var valorGalon = 1000

  switch (nombreDia.toLowerCase()) {
    case 'lunes':
      valorGalon = valorGalon + (valorGalon * 10 / 100) // 1100
      break
    case 'miercoles':
      valorGalon = valorGalon - 100 // 100
      break
    case 'viernes':
      if (horaDeLlegada >= 15 && horaDeLlegada <= 18) {
        valorGalon = valorGalon - 150 // 850
      }
      break
    case 'sabado':
    case 'domingo':
      valorGalon = valorGalon + (valorGalon * 20 / 100) // 1200
      break
    default:
      if (cantidadGalones%2 === 0) {
        valorGalon = valorGalon - 80
      }
  }

  return valorGalon * cantidadGalones
}


var inputCantidadGalones = document.querySelector('#cantidadGalones')
var inputDiaSemana = document.querySelector('#diaSemana')
var inputHoraDeLlegada = document.querySelector('#horaDeLlegada')

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (esValido()) {
    var valorGasolina = calcularValorGasolina(
        parseFloat(inputCantidadGalones.value),
        inputDiaSemana.value,
        parseInt(inputHoraDeLlegada.value)
      )

    console.log('El valor de la gasolina es de $ ' + valorGasolina)

    var salida = document.querySelector('#salida')
    salida.innerHTML = `<h1>El valor de la gasolina es de <span style="color: red;">$ ${valorGasolina}</span></h1>`
  } else {
    console.error('Error: ', 'Por favor valide los parametros del formulario!!!')
  }
})

function esValido() {
  var cantidadGalones = parseFloat(inputCantidadGalones.value)
  if (cantidadGalones < 0) {
    return false
  }

  return true
}

var borrarTodo = function() {
  var salida = document.querySelector('#salida')
  salida.innerHTML = ''
}

document.querySelector('#botonBorrar').addEventListener('click', function (event) {
  borrarTodo()
  alert('Todo ha sido borrado!')
})