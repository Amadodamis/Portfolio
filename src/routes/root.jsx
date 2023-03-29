
import { useState } from 'react';

import Footer from '../components/Footer';
import General from "../components/general/General";
import ProyectsCheff from '../components/Proyects/CheffProyects';
import ProyectsDev from '../components/Proyects/DevProyects';
import IconsLeng from '../components/IconsLeng';

export default function Root() {

    //Proyecto almacena la view que esta debajo de la principal
    //Si es null, la view que esta abajo no se renderiza
    //La view solo se muestra si el usuario setea para ver los proyectos como dev, o como cheff. 
    const [proyecto, setProyecto] = useState(null)
    const [leng, setLeng] = useState("ESP")

    


    if (proyecto === null) return (
        <div className='root' id="root">
            <General proyecto={proyecto} setProyecto={setProyecto}
                leng={leng}
            />
            <IconsLeng
                leng={leng} setLeng={setLeng}
            />
        </div>
    )

    return (

        <div className='root' id="root">

            <General proyecto={proyecto} setProyecto={setProyecto} leng={leng} />

            {
                proyecto === "developer" ?
                    (<ProyectsDev
                        leng={leng}
                    />)
                    :
                    (<ProyectsCheff
                        leng={leng}
                    />)
            }

            <IconsLeng
                leng={leng} setLeng={setLeng}
            />

            <Footer
                leng={leng}
            />

        </div>
    );
}
