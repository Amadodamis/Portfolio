function titleRuta(profesion) {
    let title = ""
    if (profesion === "cheff") {
        title = "Desarrollador"
    } else {
        title = "Cheff"
    }
    return title
}

function ruta(profesion) {
    let ruta = ""
    if (profesion === "cheff") {
        ruta = "/developer"
    } else {
        ruta = "/cheff"
    }

    return ruta
}

export { titleRuta, ruta }