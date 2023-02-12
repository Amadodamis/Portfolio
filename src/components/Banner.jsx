import foto from "../img/fotocv.jpg"

function Banner() {
    return (
        <div className='container-foto-cv'>
            <img src={foto} alt="fotoCv" className="foto" />
        </div>

    );
}

export default Banner;