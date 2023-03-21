import "./general.css"
import { useRef } from "react"
import GeneralChef from "./GeneralChef"
import GeneralDev from "./GeneralDev"

export default function General() {
    const container = useRef(null)
    const left = useRef(null)
    const right = useRef(null)

    const removeLeft = () => {
        container.current.classList.remove('hover-left')
    }

    const addLeft = () => {
        container.current.classList.add('hover-left')
    }
    const removeRight = () => {

        container.current.classList.remove('hover-right')
    }

    const addRight = () => {

        container.current.classList.add('hover-right')
    }

    return (
        <div className="body">
            <div className="container" ref={container}>
                <GeneralDev left={left}
                    addLeft={addLeft} removeLeft={removeLeft}
                />
                <GeneralChef right={right}
                    addRight={addRight} removeRight={removeRight}
                />
            </div>
        </div>
    )
}
