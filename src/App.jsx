import './App.scss';
import { useState } from "react";
import Menu from "./Meue/Menu";
import Intro from './Intro/Intro';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';

function App() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="app">
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Portfolio/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default App;
