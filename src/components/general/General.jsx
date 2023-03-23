import "./general.css"
import { useRef } from "react"
import GeneralChef from "./GeneralChef"
import GeneralDev from "./GeneralDev"

export default function General({ proyecto, setProyecto }) {


    return (
        <div className="body">
            <GeneralDev
                proyecto={proyecto} setProyecto={setProyecto}
            />
            <GeneralChef
                proyecto={proyecto} setProyecto={setProyecto}
            />
        </div>
    )
}