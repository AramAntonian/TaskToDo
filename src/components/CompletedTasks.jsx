function CompletedTasks({array,handleChange,handleDelete}){


    return(   
        <div className = "checkBoxes">
        {
            array.length?   
            array.map(el =>
                el.text?(
                <div className = "tasks" key = {el.id} >
                    <div className = "nested-task">
                        <input type = "checkbox" className = "check" id = {el.id} onClick={(e) => handleChange(e)}/>
                        <p className = "checkBoxText">{el.text}</p>
                </div>
                <p className="deleteButton" id={el.id} onClick={(e) => handleDelete(e)}>x</p>


                </div>
                    ):null):null
        
        }   
        {
        }

        </div>
)
}

export default CompletedTasks
