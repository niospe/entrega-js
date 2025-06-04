// Configuración inicial

let cantNum = parseInt(prompt("¿ Entre cuántos números querés adivinar?"));
if (isNaN(cantNum) || cantNum < 1) {
  alert("Por favor, ingresa un número válido mayor que 0.");
  cantNum = 100; // Valor por defecto si la entrada es inválida
}
let numSecreto = Math.floor(Math.random() * cantNum) +1
let intentosFallidos = 0
const numIncorrectos = []
let numIngresado = 0



// Bucle del juego

while (numIngresado !== numSecreto) {
  const estado = `
    Estas adivinando un número entre 1 y ${cantNum}
    Intentos fallidos: ${intentosFallidos}
    Numeros incorrectos: ${numIncorrectos.join(", ")}
    
  `
  
  const numIngresado = prompt(estado + "\nIngresa un numero:");

  if (isNaN(numIngresado) || numIngresado < 1 || numIngresado > cantNum) {
    alert("Ingresa un número válido.")
    continue;

  } else if (numIngresado == numSecreto) {
    alert("¡Felicidades! Adivinaste el número secreto.")
    break;

   } else if (numIngresado < numSecreto && (numSecreto - numIngresado) >= (cantNum / 2)) {
    alert("FRIO!! El número es mucho más alto.")
    intentosFallidos++
    numIncorrectos.push(numIngresado)

  } else if (numIngresado > numSecreto && (numIngresado - numSecreto) >= (cantNum / 2)) {
    alert("FRIO!! El número es mucho más bajo.")
    intentosFallidos++
    numIncorrectos.push(numIngresado)

  } else if (numIngresado < numSecreto && (numSecreto - numIngresado) <= 5) {
    alert("MUY CALIENTE!! El número es un poco más alto.");
    intentosFallidos++;
    numIncorrectos.push(numIngresado)

  } else if (numIngresado > numSecreto && (numIngresado - numSecreto) <= 5) {
    alert("MUY CALIENTE!! El número es un poco más bajo.");
    intentosFallidos++;
    numIncorrectos.push(numIngresado) 

  } else if (numIngresado < numSecreto) {
    alert("TIBIO!! El número es un poco más alto.");
    intentosFallidos++;
    numIncorrectos.push(numIngresado);

    } else if (numIngresado > numSecreto) {
      alert("TIBIO!! El número es un poco más bajo.");
      intentosFallidos++;
      numIncorrectos.push(numIngresado);
  } else {
    intentosFallidos++;
    numIncorrectos.push(numIngresado);
  }

}
