import { Link } from "react-router-dom"

export default function LinksPersonalesCheff() {


    let linkCvCheffEsp = "https://docs.google.com/document/d/1y2MeNvaPhczltRd37gDtB-Eey0XRh4IP-UlhsonawQE/edit?usp=sharing"

    let linkCvCheffEng = "https://docs.google.com/document/d/1CfaCnM_4KZ-0vE4R7kBt7pLdLUPL-KXQc0zU0Oy-N6c/edit?usp=sharing"


    return (

        <div className='container-links-cv-github-linkedin'>

            <Link to={linkCvCheffEsp} target="_blank" rel="noopener noreferrer">
                <div className="links-cv-github-linkedin">
                    <p> Cv Español</p>
                </div>
            </Link>

            <Link to={linkCvCheffEng} target="_blank" rel="noopener noreferrer">
                <div className="links-cv-github-linkedin">
                    <p> Cv English</p>
                </div>
            </Link>
        </div>
    )
}