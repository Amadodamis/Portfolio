import "../css/footer.css"

import gitHubIcon from "../img/icons-footer/github.png"
import linkedinIcon from "../img/icons-footer/linkedin.png"
import cvIcon from "../img/icons-footer/cv.png"
import topIcon from "../img/icons-footer/top.png"

export default function Footer() {

    console.log("renderize")
    return (
        <footer>
            <div className='footer-content'>
                <ul className="socials">
                    <li><a href="#">
                        <img src={topIcon} alt={'topIcon'} className={'icon-footer'} />
                    </a></li>

                    <li><a href="#"><img src={gitHubIcon} alt={'topIcon'} className='icon-footer' /></a></li>

                    <li><a href="#"><img src={linkedinIcon} alt={'topIcon'} className='icon-footer' /></a></li>

                    <li><a href="#"><img src={cvIcon} alt={'topIcon'} className='icon-footer' /></a></li>
                </ul>
            </div>
            <div className='footer-bottom'>
                <p>copyright &copy; 2023 designed by <span>Amado Damis</span></p>
            </div>
        </footer>
    );
}
