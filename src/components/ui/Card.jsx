import "./ui.css"
import { IoEarth, IoOpenOutline } from "react-icons/io5";

function Card({
    title = "Title",
    text = "Lorem ipsum dolor",
    cardPositionName = "Software Developer",
    fromTo = "2001 - 2024",
    image = "univer.jpg",
    buttonAction = null,
    website = "https://www.univer.hu/",
    ...props
}) {
 
  return (
    <div className="card">
        <div className="cardImage" style={{backgroundImage:"url('"+image+"')"}}></div>
        <div className="cardContent">
            <h3 className="cardTitle">
                {title}
            </h3>
            <div className="cardPositionName">
                {cardPositionName}
            </div>
            <div className="cardText">
                {text}
            </div>
            <div className="cardBottom">
                <div>{fromTo}</div>
                <div className="cardActions">
                    <a className="icon" href={website} target="_blank">
                        <IoEarth size={18} fill={"#333"}/>
                    </a>
                    {buttonAction ? <button className="icon" onClick={buttonAction}>
                        <IoOpenOutline size={18}/>
                    </button> : ""}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Card;
