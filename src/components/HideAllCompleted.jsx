function HideAll({onHide}){



    return(
        <div className="hide">
            <input type = "checkbox" className="hideAll" onClick={(e) => onHide(e.target.checked)}/>
            <p className="hideText">Hide completed</p>
        </div>
    )
}

export default HideAll