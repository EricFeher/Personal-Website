import "./ui.css"
import { IoOpenOutline } from "react-icons/io5";

function Card({
    title = "Title",
    text = "Lorem ipsum dolor",
    cardPositionName = "Software Developer",
    fromTo = null,
    image = null,
    buttonAction = null,
    links = null,
    ...props
}) {
 
  return (
    <div className={`card ${image ? "" : "cardWithoutImage"}`}>
        {image ? <div className="cardImage" style={{backgroundImage:"url('"+image+"')"}}></div> : ""}
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
                <div>{fromTo ? fromTo : ""}</div>
                <div className="cardActions">
                    { links ? links.map((link)=>{
                        return <a className="icon" key={link.key} href={link.website} target="_blank">
                            <link.icon size={18}/>
                        </a>
                    }): ""
                    }
                    
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
