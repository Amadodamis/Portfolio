import fotoDev from "../img/fotocv.jpg"
import fotoCheff from "../img/cocinero.jpg"
import { tituloDev, textoDev, tituloG, textoG } from "./dataBanner"

function getFoto(profesion) {
    if (profesion === "developer") {
        return fotoDev
    }
    else {
        return fotoCheff
    }
}


function getTitulo(profesion) {
    if (profesion === "developer") {
        return tituloDev
    }
    else {
        return tituloG
    }
}

function getTexto(profesion) {
    if (profesion === "developer") {
        return textoDev
    } else {
        return textoG
    }
}


export { getFoto, getTexto, getTitulo }