import "./Navbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar({openMenu, setOpenMenu}) {
  
  return (
    <div className={openMenu? "navbar active" : "navbar"} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro"><h1>Codever.</h1></a>
          <div className="info">
            <div className="container">
              <EmailIcon className="icon"/>
              <span>Dev.rammah@gmail.com</span>
            </div>
            <div className="container">
              <GitHubIcon className="icon"/>
              <a href="https://github.com/Rammah-mohamed" target="_blank" rel="noreferrer">GitHub Account </a>
            </div>
          </div>
        </div>
        <div className="right" onClick={() => setOpenMenu(!openMenu)}>
          <div className="humberger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar