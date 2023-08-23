import "./About.scss"
import Rigth from "../img/right.jpg"
import Mid from "../img/mid.jpg"

function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="left">
          <h2>About Me</h2>
          <p>
            A Front-End Developer experience specialized in web development, user interface, HTML, CSS, JavaScript and
            React. With a passion for both personal growth and for software development. Adept at identifying opportunities to enhance front-end design and improve the user experience. Seeking to use technical proficiency and creativity to develop engaging user
            experiences. Ready to apply my passion for coding to a talented engineering team to develop quality solutions.
          </p>
        </div>
        <div className="mid">
        <div className="imgContainer">
            <img src={Mid} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src={Rigth} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About