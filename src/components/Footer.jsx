import "./footer.css"

import { Link } from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"


import gitHubIcon from "../img/icons-footer/github.png"
import linkedinIcon from "../img/icons-footer/linkedin.png"
import topIcon from "../img/icons-footer/top.png"

export default function Footer() {

    let linkGithub = "https://github.com/Amadodamis"

    let linkLinkedin = "https://www.linkedin.com/in/amadodamis/"

    return (
        <footer>
            <div className='footer-content'>
                <ul className="socials">
                    <li>
                        <LinkScroll to="root" smooth={true} duration={500}>
                            <img src={topIcon} alt={'topIcon'} className={'icon-footer'} />
                        </LinkScroll>
                    </li>

                    <li>
                        <Link to={linkGithub} target="_blank" rel="noopener noreferrer">
                            <img src={gitHubIcon} alt={'topIcon'} className='icon-footer' />
                        </Link>
                    </li>

                    <li>
                        <Link to={linkLinkedin} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt={'topIcon'} className='icon-footer' />
                        </Link>
                    </li>

                </ul>

            </div>
            <div className='footer-bottom'>
                <p>copyright &copy; 2023 designed by <span>Amado Damis</span></p>
            </div>
        </footer>
    );
}
