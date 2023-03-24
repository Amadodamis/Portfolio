
import { useState } from 'react';

import Footer from '../components/Footer';
import General from "../components/general/General";
import ProyectsCheff from '../components/Proyects/ProyectsCheff';
import ProyectsDev from '../components/Proyects/ProyectsDev';



export default function Root() {

    const [proyecto, setProyecto] = useState(null)

    if (proyecto === null) return <General proyecto={proyecto} setProyecto={setProyecto} />

    return (
        <div className='root' id="root">
            <General
                proyecto={proyecto} setProyecto={setProyecto}
            />

            {
                proyecto === "developer" ?
                    (<ProyectsDev />)
                    :
                    (<ProyectsCheff />)
            }

            <Footer />
        </div>
    );
}
