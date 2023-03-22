import leftIcon from "../../../img/arrowLeft.png"
import rightIcon from "../../../img/arrowRight.png"

export default function Arrows({ array, imageActual, setImageActual, setbodyBackground }) {

    const prev = () => {
        if (imageActual.id - 1 >= 0) {
            let nuevaImagen = array[imageActual.id - 1]
            setImageActual(nuevaImagen)
            setbodyBackground(nuevaImagen)
        }
        else {
            let nuevaImagen = array[array.length - 1]
            setImageActual(nuevaImagen)
            setbodyBackground(nuevaImagen)
        }
    }

    const next = () => {
        if (imageActual.id + 1 < array.length) {
            let nuevaImagen = array[imageActual.id + 1]
            setImageActual(nuevaImagen)
            setbodyBackground(nuevaImagen)
        } else {
            let nuevaImagen = array[0]
            setImageActual(nuevaImagen)
            setbodyBackground(nuevaImagen)
        }
    }

    return (
        <div className='container-arrows'>
            <img src={leftIcon} alt="" className="arrow" onClick={prev} />
            <img src={rightIcon} alt="" className="arrow" onClick={next} />
        </div>
    )
}
