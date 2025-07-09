import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Skills.css";

function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Muhamad Ramadani - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="skills-right">
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              <i className="devicon-python-plain colored" title="Python"></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tailwindcss-plain colored"
                title="Tailwind"
              ></i>
              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-flask-plain-wordmark colored"
                title="Flask"
              ></i>
              <i
                className="devicon-django-plain-wordmark colored"
                title="Django"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-mysql-plain-wordmark colored"
                title="MySQL"
              ></i>
              <i
                className="devicon-mongodb-plain-wordmark colored"
                title="MongoDB"
              ></i>
              <i
                className="devicon-express-original-wordmark colored"
                title="Express.js"
              ></i>
              <i
                className="devicon-nodejs-plain-wordmark colored"
                title="Node.js"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tensorflow-original-wordmark colored"
                title="TensorFlow"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i className="devicon-flutter-plain colored" title="Flutter"></i>
              <i
                className="devicon-github-original-wordmark colored"
                title="Github"
              ></i>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;