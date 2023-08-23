import "./PortList.scss";

function PortList({active, setActive}) {
  
  const listData = [
    {
      id:1,
      name:"Featured"
    },
    {
      id:2,
      name:"Js Apps"
    },
    {
      id:3,
      name:"Templates"
    },
    {
      id:4,
      name:"React Apps"
    }
  ]

  return (
    <div className="portList">
      <ul>
        {listData.map(i => (
          <li 
          key={i.id} 
          className={active === i.name? "active" : ""}
          onClick={() => setActive(i.name)}
          >
            {i.name}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default PortList