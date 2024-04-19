import "./ui.css"

function Skill({
    name, url, height, width
}) {
    return (
        <div className='skillContainer'>
            <div className='skillImgContainer'>
                <img className='skillImage' style={{height: height, width:width}} src={url}/>
            </div>
            <div>{name}</div>

        </div>
    )
}

export default Skill;
