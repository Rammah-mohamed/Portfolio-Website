import "./Intro.scss";
import Me from "../img/man.png";

function Intro() {
	return (
		<div className='intro' id='intro'>
			<div className='left'>
				<h2>Hi, There I'm</h2>
				<h1>Rammah Mohamed</h1>
				<h3>Front End Developer</h3>
			</div>
			<div className='right'>
				<div className='shape'></div>
				<div className='imgContainer'>
					<img src={Me} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Intro;
