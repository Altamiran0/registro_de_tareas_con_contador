//llamar elementos desde el DOM: container, botones
const cronometroContador = document.getElementById("cronometroContador")

const bInicioPausa = document.getElementById("bInicioPausa")
const bReinicio    = document.getElementById("bReinicio")

const input_name   = document.getElementById("input_name")
const list_item    = document.getElementById("list_item")

//crear funcion de contador
let contador = { mins:0, segs:0, csegs:0 }

const aumentar_contador = () => {
    
    contador.csegs+= 1

    if (contador.csegs >= 100) {  
        contador.csegs = 0
        contador.segs+= 1
    }

    if (contador.segs >= 60) {  
        contador.segs = 0
        contador.mins+= 1
    }

    let enContador = { mins: null, segs: null, csegs: null }

    if (contador.csegs < 10) { enContador.csegs = `0${contador.csegs}` }
    else { enContador.csegs = contador.csegs }

    if (contador.segs < 10) { enContador.segs = `0${contador.segs}` }
    else { enContador.segs = contador.segs }

    if (contador.mins < 10) { enContador.mins = `0${contador.mins}` }
    else { enContador.mins = contador.mins }

    return `${enContador.mins}: ${enContador.segs}: ${enContador.csegs}`
}

//imprimir contador
cronometroContador.innerText = "00: 00: 00"
const imprimir_contador = (contador) => cronometroContador.innerText = `${aumentar_contador(contador)}`

//pomodoro item
const nuevo_pomodoroItem = () => {
    list_item.innerHTML+= `
        <li class="pomodoroRegister__item">
            <p class="pomodoroRegister__item--title">${input_name.value.charAt(0).toUpperCase()}${input_name.value.slice(1)}</p> 
            <p class="pomodoroRegister__item--timer">${aumentar_contador()}</p>
        </li>`
}

//boton de inicio y pausa
let contador_activado = false
let ID_de_intevalo_de_contador 

const boton_de_inicio_y_pausa = () => {
    if (contador_activado == false) {
    ID_de_intevalo_de_contador = setInterval(imprimir_contador, 10)

    bInicioPausa.innerHTML = '<i class="fa-solid fa-pause"></i>'
    bReinicio.style.display = "block"   
    
    contador_activado = true
    } else {
    clearInterval(ID_de_intevalo_de_contador)
    
    bInicioPausa.innerHTML = '<i class="fa-solid fa-play"></i>' 
    contador_activado = false
    }
}
//boton de reinicio
const reiniciar_contador = () => {
    nuevo_pomodoroItem()

    contador.mins  = 0
    contador.segs  = 0
    contador.csegs = 0

    cronometroContador.innerText = "00: 00: 00" 

    if (contador_activado == true) { 
        clearInterval(ID_de_intevalo_de_contador) 
        bInicioPausa.innerHTML = '<i class="fa-solid fa-play"></i>' 
        contador_activado = false
    }
       
    bReinicio.style.display = "none"
}

bInicioPausa.onclick = boton_de_inicio_y_pausa

bReinicio.style.display = "none"
bReinicio.onclick = reiniciar_contador


