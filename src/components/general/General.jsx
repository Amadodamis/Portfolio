import "./general.css"
import GeneralChef from "./GeneralChef"
import GeneralDev from "./GeneralDev"

export default function General({ proyecto, setProyecto, leng }) {


    return (
        <div className="body">
            <GeneralDev
                leng={leng}
                proyecto={proyecto} setProyecto={setProyecto}
            />
            <GeneralChef
                leng={leng}
                proyecto={proyecto} setProyecto={setProyecto}
            />
        </div>
    )
}

