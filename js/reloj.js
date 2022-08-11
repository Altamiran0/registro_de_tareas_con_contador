//llamar variables desde el document

//consegir la fecha actualizada

//conseguir los datos: hs/min/seg
//corregirlos, ordenarlos e imprimirlos

//conseguir los datos: dd/mm/aa
//ordenarlos e imprimirlos

const rHora   = document.getElementById("horaActual")
const rFecha  = document.getElementById("fechaActual")

let nuevo_dia = false

const horaActualizada = () => {

// Conseguir
const dateActualizado = new Date

const horario = {
    hs  : dateActualizado.getHours(),
    min : dateActualizado.getMinutes(),
    seg : dateActualizado.getSeconds()}

// Ordenarlos
if (horario.hs  < 10) { horario.hs  = `0${horario.hs}`  }
if (horario.min < 10) { horario.min = `0${horario.min}` }

// Imprimirlos
const horarioText = `${horario.hs}: ${horario.min}`
rHora.innerHTML = `<p class="relog__copy">${horarioText}<span class="relog__copy--hs">hs</span></p>`

// Actualizar nuevo_dia
if (horario.hs == 0 && horario.min == 0 && horario.seg == 0) { nuevo_dia = true}
}

const fechaActualizada = () => {
    
    // Conseguir
    const dateActualizado = new Date
    
    const fecha = {
        dd  : dateActualizado.getDay(),
        mm : dateActualizado.getMonth()}
    
    // Ordenarlos
    function obtenerDia() {
        let dia

        switch (fecha.dd) {
            case 1: dia = "Lunes"
                break;

            case 2: dia = "Martes"
                break;

            case 3: dia = "Miercoles"
                break;

            case 4: dia = "Jueves"
                break;

            case 5: dia = "Viernes"
                break;

            case 6: dia = "Sabado"
                break;

            case 7: dia = "Domingo"
                break;

        }

        return dia}

    function obtenerMes() {
        let mes

        switch (fecha.mm) {

            case 1: mes = "Enero"
                break;

            case 2: mes = "Febrero"
                break;

            case 3: mes = "Marzo"
                break;

            case 4: mes = "Abril"
                break;

            case 5: mes = "Mayo"
                break;

            case 6: mes = "Junio"
                break;

            case 7: mes = "Julio"
                break;

            case 8: mes = "Agosto"
                break;

            case 9: mes = "Septiembre"
                break;

            case 10: mes = "Octubre"
                break;

            case 11: mes = "Noviembre"
                break;

            case 12: mes = "Diciembre"
                break;

        }

        return mes}
    
    // Imprimirlos
    const fechaText = `${obtenerDia()}, ${fecha.dd} de ${obtenerMes()}`
    rFecha.innerText = fechaText

    nuevo_dia = false
    }

horaActualizada()
fechaActualizada()

setInterval(horaActualizada,1000)
if (nuevo_dia == true) { fechaActualizada() }