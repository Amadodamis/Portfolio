import { Link } from "react-router-dom"

export default function LinksPersonalesDev() {


  let linkCvDes = "https://docs.google.com/document/d/1sDtrRxtanHioWNvT9k_Oz44RRCZUeMVFBxigP4Q4cQo/edit?usp=sharing"

  let linkCvDev = "https://docs.google.com/document/d/1CUxRAFnUR0U_LNMFAcHwjlmMxAoQ0Gk1crTNWys6jzw/edit?usp=sharing"

  let linkGithub = "https://github.com/Amadodamis"

  let linkLinkedin = "https://www.linkedin.com/in/amadodamis/"

  return (

    <div className='container-links-cv-github-linkedin'>

      <Link to={linkGithub} target="_blank" rel="noopener noreferrer">
        <div className="links-cv-github-linkedin">
          <p> Github </p>
        </div>
      </Link>

      <Link to={linkLinkedin} target="_blank" rel="noopener noreferrer">
        <div className="links-cv-github-linkedin">
          <p> Linkedin</p>
        </div>
      </Link>

      <Link to={linkCvDes} target="_blank" rel="noopener noreferrer">
        <div className="links-cv-github-linkedin">
          <p> Cv Español</p>
        </div>
      </Link>

      <Link to={linkCvDev} target="_blank" rel="noopener noreferrer">
        <div className="links-cv-github-linkedin">
          <p> Cv English</p>
        </div>
      </Link>
    </div>
  )
}
