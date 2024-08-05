import logo from "../assets/acb.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-5 w-20" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/aminda-bandara-46114b1b2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/amindabandara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://x.com/aminda_bandara" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/amindabandara/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/aminda.bandara.5/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://www.youtube.com/channel/UCy2RVWjc2hBRG04f-jx00Tg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
