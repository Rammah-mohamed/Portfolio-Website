import "./Card.scss";
import { useState, useEffect } from 'react';
import {featured ,templates, reactApps, jsApps } from './data';

function Card({active}) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    switch(active) {
      case "Featured": setdata(featured);
      break;
      case "Templates": setdata(templates);
      break;
      case "Js Apps": setdata(jsApps);
      break;
      case "React Apps": setdata(reactApps);
      break;
      default: setdata(featured)
    }
  },[active])

  return (
    <div className="card">
      <div className="wrapper">
        {data.map(i => (
          <a href={i.url} key={i.id} target="_blank" rel="noreferrer">
            <h3>{i.name}</h3>
            <div className="imgContainer">
              <img src={i.img} alt="" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
export default Card