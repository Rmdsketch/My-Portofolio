import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>Muhamad Ramadani &copy; 2025</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/Rmdsketch"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhamad-ramadani-937976245/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://www.instagram.com/ramadani_sketch/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
