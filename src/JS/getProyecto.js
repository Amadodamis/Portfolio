
export default  function getProyecto(name, proyectos) {
    let nuevoProyecto;

    for (let index = 0; index < proyectos.length; index++) {
        if (proyectos[index].title === name) {
            nuevoProyecto = proyectos[index]
            break;
        }
    }


    return nuevoProyecto
}
