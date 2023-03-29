export default function DescriptionProyect({ proyectoDevActual, leng }) {
    return (
        <div className="description-proyecto-actual">
            <p>
                {leng === "ESP" ? proyectoDevActual.texto : proyectoDevActual.text}
            </p>
        </div>
    )
}
