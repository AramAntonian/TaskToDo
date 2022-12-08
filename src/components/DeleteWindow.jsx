function DeleteWindow({disagree,agree}){

   
    return(
        <div className="deleteWindow" >
            <p className="questionContent">Are you sure you want to delete?</p>
            <div className="answers">
                <p className="answerYes" onClick = {(e) => agree(e)}>Yes</p>
                <p className="answerNo" onClick = {disagree}>No</p>
            </div>
        </div>
    )
}


export default DeleteWindow