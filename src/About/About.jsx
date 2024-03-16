import "./About.scss";
import Rigth from "../img/right.jpg";
import Mid from "../img/mid.jpg";

function About() {
	return (
		<div className='about' id='about'>
			<div className='wrapper'>
				<div className='left'>
					<h2>About Me</h2>
					<p>
						I'am A Front-End Developer specialized in React Framework. With a passion for both
						personal growth and software development. Seeking to enhance front-end designs and
						improve the user experience. Ready to apply my passion for coding to a talented creative
						engineering team to develop quality solutions.
					</p>
				</div>
				<div className='mid'>
					<div className='imgContainer'>
						<img src={Mid} alt='' />
					</div>
				</div>
				<div className='right'>
					<div className='imgContainer'>
						<img src={Rigth} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
