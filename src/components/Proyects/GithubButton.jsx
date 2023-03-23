import { Link } from "react-router-dom";
import gitHubIcon from "../../img/icons-footer/github.png"
import exportIcon from "../../img/export.png"


export default function GithubButton({ title, proyectoDevActual }) {

    let links = [...proyectoDevActual.link];
    let linkTitle = [...proyectoDevActual.linkTitle]
    return (
        <div className='container-links'>
            {
                links.map((link, i) =>
                    <Link to={link} className="link" key={i} target="_blank" rel="noopener noreferrer"
                    >
                        <div className="container-repo">
                            <p className="p-repo">{linkTitle[i]}</p>
                            <img src={exportIcon} alt="github-icon" className='github-icon-link-repo' />
                            <img src={gitHubIcon} alt="github-icon" className='github-icon-link-repo' />

                        </div>
                    </Link>
                )
            }

        </div>
    )
}
/*




*/