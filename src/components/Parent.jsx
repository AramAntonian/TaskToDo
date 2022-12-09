import { useEffect, useRef, useState } from "react"
import CompletedTasks from "./CompletedTasks.jsx"
import "./index.css"
import {v4 as uuid} from "uuid"
import TodoList from "./TodoList.jsx"
import HideAll from "./HideAllCompleted.jsx"


function Parent({handleDelete,todo,setToDo,completed,setCompleted}){
    const [inputValue,setInputValue] = useState("")
    const [isHide,setIsHide] = useState(false)   
    const [warningMassage,setWarningMassage] = useState(false)
    const buttonRef = useRef(null)
    const inputRef = useRef(null)
  

    function handleEnter(event){
        if(event.keyCode === 13)
            buttonRef.current.focus()
    }

    useEffect(()=>{
        const data = window.localStorage.getItem("MY_TODOS") 
        if(data !== null){
            setToDo(JSON.parse(data))
        }
    },[setToDo])
    
    useEffect(()=>{
        window.localStorage.setItem("MY_TODOS",JSON.stringify(todo))
    },[todo])

   
    function handleAdd(){
        if(inputValue.length > 0)
        {
            if(inputValue.length > 54){
            setWarningMassage(true)
            }
            else{
                setToDo(prev => [
                    ...prev,
                    {
                        text:inputValue,
                        id:uuid(),
                        isCompleted:false,
                        deleteTask:false,
                    }
                ]
           ) 
           setInputValue("")
           setWarningMassage(false)
            }

        }
       
        inputRef.current.focus()
       }
       function onHide(isHide){
        if(isHide)
        { 
            setIsHide(isHide)
            setCompleted(prev => [...prev,...todo.filter((el)=> el.isCompleted !== true)])
        }
        else setCompleted([])
        setIsHide(isHide)
       
        
       }

       function handleChange(event){
        if(event.target.checked){
            setToDo(prev => prev.map((el)=> el.id === event.target.id?{...el,isCompleted:true}:el))     
        }
        else{
            setToDo(prev => prev.map((el)=> el.id === event.target.id?{...el,isCompleted:false}:el))  
        }
    }
  

    return(
        <>
          <HideAll onHide = {onHide}/>
            <div className="inputField">
            <div className="task-input">
                <p className = "taskText">Task</p>
                <div className="warning-input">
                        <input
                        type="text"
                        placeholder="Write here" 
                        className="inputText"
                        value = {inputValue}
                        onChange = {(event)=> setInputValue(event.target.value)}
                        ref = {inputRef}
                        onKeyDown = {handleEnter} required/>
                        {warningMassage?<p className = "warningMassage" style = {{display:warningMassage}} >Task content can contain max 54 characters.</p>:null}
                </div>
                </div>
                    <input type="button" value="Add" className="addButton"  ref = {buttonRef} onClick = {handleAdd} />
               
            </div>
            {!isHide?<TodoList setToDo={setToDo} todo = {todo}     handleDelete = {handleDelete} handleChange = {handleChange} />
      :<CompletedTasks array={completed} handleDelete = {handleDelete} handleChange ={handleChange} /> }        
      </>

    )
}

export default Parent
