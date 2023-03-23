import { Link } from "react-router-dom"

export default function LinksPersonales() {


  let linkCvDes = "https://drive.google.com/file/d/14a5Duaq8BFCXHzjRf88C6tfEAyaGdIni/view?usp=sharing"

  let linkCvDev = "https://drive.google.com/file/d/1XSxHOP81Fys0F373Svj722YCylvE1u_1/view?usp=sharing"

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
