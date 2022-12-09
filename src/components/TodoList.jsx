import "./index.css"

function TodoList({todo,handleDelete,handleChange}){
 

    return(
        
        <div className = "checkBoxes">
            {
                 todo.length?   
                 todo.map(el =>
                     el.text?(
                    <div className = "tasks" key = {el.id} >
                        <div className = "nested-task">
                            <input type = "checkbox" className = "check" id = {el.id} onClick={(e) => handleChange(e)} checked = {el.isCompleted} onChange = {()=> null}/>
                            <p className = "checkBoxText" style = {{color:el.isCompleted?"grey":"black"}} >{el.text}</p>
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

export default TodoList
