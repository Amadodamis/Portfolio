import { panaderoArray, pasteleroArray, cocineroArray } from "./arrayImagesGastronomia"


function changeRolImageCheff(rol, setImageActual, setbodyBackground, setArrayProfesion) {
    if (rol === "Cocinero") {
        setImageActual(cocineroArray[0])
        setbodyBackground(cocineroArray[0])
        setArrayProfesion(cocineroArray)
    } else {

        if (rol === "Pastelero") {
            setImageActual(pasteleroArray[0])
            setbodyBackground(pasteleroArray[0])
            setArrayProfesion(pasteleroArray)
        } else {
            setImageActual(panaderoArray[0])
            setbodyBackground(panaderoArray[0])
            setArrayProfesion(panaderoArray)
        }
    }

}


function inicializacionRol() {
    return cocineroArray
}


export { changeRolImageCheff, inicializacionRol }