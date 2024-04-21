import { useState } from "react";
import "./ui.css"
import { IoOpenOutline, IoCloseOutline } from "react-icons/io5";

function Card({
    title = "Title",
    text = "Lorem ipsum dolor",
    cardPositionName = "Software Developer",
    fromTo = null,
    image = null,
    buttonAction = null,
    links = null,
    modalText = "",
    ...props
}) {
    const [isExpanded,setExpanded] = useState(false);

    const openMore = ()=> {
        document.body.style.overflow="hidden";
        setExpanded(true);
    }
 
    const closeMore = ()=> {
        document.body.style.overflow="";
        setExpanded(false);
    }

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
                        if(link.website.includes("pdf") && window.innerWidth < 1050){
                            return <a className="icon" key={link.key} href={link.website} download>
                                <link.icon size={18}/>
                            </a>
                        }
                        return <a className="icon" key={link.key} href={link.website} target="_blank">
                            <link.icon size={18}/>
                        </a>
                    }): ""
                    }
                    
                    {buttonAction ? <button className="icon" onClick={()=>{openMore()}}>
                        <IoOpenOutline size={18}/>
                    </button> : ""}
                </div>
                
            </div>
        </div>
        {
            isExpanded ? <div className = "modal">
                <div className="modalContent">
                    <div className="modalHeader">
                        <div>
                            <h2 className="modalTitle">{title}</h2>
                            <div className="modalPositionName">
                                {cardPositionName}
                            </div>
                        </div>
                        <button className="modalCloseButton button" onClick={()=>{closeMore()}}><IoCloseOutline size={60}/></button>

                    </div>
                    <div className="modalText">
                        {modalText}
                    </div>
                </div>
            </div> : <></>
        }
    </div>
  )
}

export default Card;
