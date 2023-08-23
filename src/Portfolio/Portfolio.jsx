import Card from "../Card/Card";
import { useState } from "react";
import PortList from "../PortList/PortList"
import "./Portfolio.scss"

function Portfolio() {
  const [active, setActive] = useState("Featured");
  return (
    <div className="portfolio" id="portfolio">
      <div className="wrapper">
        <h2>Portfolio</h2>
        <PortList active={active} setActive={setActive}/>
        <Card active={active}/>
      </div>
    </div>
  )
}

export default Portfolio