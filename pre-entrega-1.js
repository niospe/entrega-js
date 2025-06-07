function inicio(){
  const iniciar =prompt(`Bienvenido a un pequeño sitio de mini juegos de consola
      Elige el juego que quieres jugar:
      1. Adivina el número
      2. Piedra Papel Tijera Spock Lagarto
      3. Salir
  `)
  if (iniciar === "1") {
    miniJuegoNumeros()
  } else if (iniciar === "2") {
    miniJuegoSheldon()
  } else if (iniciar === "3") {
  alert("Gracias por visitar el sitio. ¡Hasta luego!");
}
}
function miniJuegoNumeros() {
  alert(`¡Bienvenido al juego de adivinar el número secreto!
  Tienes que adivinar un número secreto entre 1 y un número que vos elijas.
  Recibirás pistas para ayudarte a adivinarlo.`)

// Configuración inicial ADIVINAR NUMERO
let cantNum = parseInt(prompt("¿ Entre cuántos números querés adivinar?"));
if (isNaN(cantNum) || cantNum < 1) {
  alert("Por favor, ingresa un número válido mayor que 0.");
  cantNum = 100; // Valor por defecto si la entrada es inválida
}
let numSecreto = Math.floor(Math.random() * cantNum) +1 // Esta formula la busqué por fuera para que el número secreto sea un numero entre 1 y cantNum
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
    alert(estado + `\n¡Felicidades! Adivinaste el número secreto es ${numSecreto}.`)
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
    intentosFallidos++
    numIncorrectos.push(numIngresado)

  } else if (numIngresado > numSecreto && (numIngresado - numSecreto) <= 5) {
    alert("MUY CALIENTE!! El número es un poco más bajo.");
    intentosFallidos++
    numIncorrectos.push(numIngresado) 

  } else if (numIngresado < numSecreto) {
    alert("TIBIO!! El número es un poco más alto.");
    intentosFallidos++
    numIncorrectos.push(numIngresado);

    } else if (numIngresado > numSecreto) {
      alert("TIBIO!! El número es un poco más bajo.");
      intentosFallidos++
      numIncorrectos.push(numIngresado);
  } else {
    intentosFallidos++;
    numIncorrectos.push(numIngresado)
  }

}
      // Preguntar por otra partida
  if (confirm("¿Jugar de nuevo?")) {
    miniJuegoNumeros()
  } else { inicio() 
  }
}
/* 
//Configuración inicial PIEDRA PAPEL TIJERA
function miniJuegoPiedraPapelTijera() {
    alert(`¡Bienvenido al juego de Piedra Papel Tijera!
    Jugarás contra la computadora.
    Las reglas son simples:
    - Piedra aplasta Tijera
    - Tijera corta Papel
    - Papel cubre Piedra`)
    let partidas = parseInt(prompt("¿Cuántas partidas querés jugar?"));
    const opciones = ["piedra", "papel", "tijera"]
    
    let puntosJugador = 0
    let puntosComputadora = 0
    while (puntosComputadora + puntosJugador < partidas) {
        const estado = `
        Jugador: ${puntosJugador} puntos
        Computadora: ${puntosComputadora} puntos`
    
    
        let eleccionJugador = parseInt(prompt(estado + `\nElige una opción:
        1- Piedra
        2- Papel
        3- Tijera:`));
    let eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)]
    
 

    if (eleccionJugador < 1 || eleccionJugador > 3) {
        alert("Opción inválida. Por favor, elige 1, 2 o 3.")
        return;
    } else if (puntosComputadora + puntosJugador == partidas) {
        alert(`¡Juego terminado! El jugador tiene ${puntosJugador} puntos y la computadora tiene ${puntosComputadora} puntos.`)
        if (puntosJugador > puntosComputadora) {
            alert("¡Felicidades! Has ganado el juego.")
        } else if (puntosJugador < puntosComputadora) {
            alert("Lo siento, has perdido el juego.")
        } else {
            alert("El juego terminó en empate.")
        }
        return;
    } else if (eleccionJugador === 1 && eleccionComputadora === "tijera") {
        alert(`¡Ganaste! Tu piedra aplasta la ${eleccionComputadora}.`)
        puntosJugador++;
    } else if (eleccionJugador === 1 && eleccionComputadora === "piedra") {
        alert(`¡Empate! Ambos eligieron Piedra.`)
    } else if (eleccionJugador === 1 && eleccionComputadora === "papel") {
        alert(`¡Perdiste! El ${eleccionComputadora} envuelve tu piedra.`)
        puntosComputadora++
    } else if (eleccionJugador === 1 && eleccionComputadora === "papel") {
        alert(`¡Perdiste! La computadora eligió ${eleccionComputadora}.`)
        puntosComputadora++
    } else if (eleccionJugador === 2 && eleccionComputadora === "tijera") {
        alert(`¡Perdiste! La ${eleccionComputadora} corta tu papel.`)
        puntosComputadora++
    } else if (eleccionJugador === 2 && eleccionComputadora === "piedra") {
        alert(`¡Ganaste! Tu papel aplasta la ${eleccionComputadora}.`)
        puntosJugador++
    } else if (eleccionJugador === 2 && eleccionComputadora === "papel") {
        alert(`¡Empate! Ambos eligieron papel.`)
    } else if (eleccionJugador === 3 && eleccionComputadora === "tijera") {
        alert(`¡Empate! Ambos eligieron tijera.`)
    } else if (eleccionJugador === 3 && eleccionComputadora === "piedra") {
        alert(`¡Perdiste! La ${eleccionComputadora} aplasta tu tijera.`)
        puntosComputadora++
    } else if (eleccionJugador === 3 && eleccionComputadora === "papel") {
        alert(`¡Ganaste! Tu tijera corta el ${eleccionComputadora}.`)
        puntosJugador++
    
    } else {
        alert("Opción inválida. Por favor, elige 1, 2 o 3.");

    }
    
}
} */ 
//elegi cambiar el juego clasico al de la serie para aplicar objetos


//Configuración inicial PIEDRA PAPEL TIJERA LAGARTO SPOCK

function miniJuegoSheldon() {
  const options = ["piedra", "papel", "tijeras", "lagarto", "spock"]
  const rules = {
    piedra: { gana: ["tijeras", "lagarto"], pierde: ["papel", "spock"] },
    papel: { gana: ["piedra", "spock"], pierde: ["tijeras", "lagarto"] },
    tijeras: { gana: ["papel", "lagarto"], pierde: ["piedra", "spock"] },
    lagarto: { gana: ["papel", "spock"], pierde: ["piedra", "tijeras"] },
    spock: { gana: ["piedra", "tijeras"], pierde: ["papel", "lagarto"] }
  };

    // Instrucciones del juego
  alert(`¡Bienvenido al juego de Piedra Papel Tijera Spock Lagarto!
      Reglas del juego:
Piedra: aplasta a Lagarto y Tijeras.
Lagarto: envenena a Spock y come Papel.
Spock: vaporiza a Piedra y destruye a Tijeras.
Tijeras: decapitan a Lagarto y cortan a Papel.
Papel: desautoriza a Spock y cubre a Piedra. `)

  // Jugador elige
  const player = prompt(`Escribe tu elección: piedra, papel, tijeras, lagarto o spock`).toLowerCase()
  if (!options.includes(player)) {
    alert("¡Opción inválida!")
    return sheldonGame(); // Reinicia si la entrada es incorrecta
  }

  // CPU elige aleatoriamente
  const cpu = options[Math.floor(Math.random() * (options.length))];
  alert(`Sheldon eligió: ${cpu}`)

  // Determinar resultado
  if (player === cpu) {
    alert("¡Empate!")
  } else if (rules[player].gana.includes(cpu)) {
    alert(`¡Ganaste! ${player} vence a ${cpu}.`)
  } else {
    alert(`¡Perdiste! ${cpu} vence a ${player}.`)
  }

  // Preguntar por otra partida
  if (confirm("¿Jugar de nuevo?")) {
    miniJuegoSheldon()
  } else { inicio()
  }
}

inicio(); 
