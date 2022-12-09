import './components/index.css'
import Parent from './components/Parent.jsx';
import { useState } from 'react';
import initialValue from './components/InitialValueOfTodo';
import DeleteWindow from './components/DeleteWindow';


function App() {
  const [todo,setToDo] = useState(initialValue)
  const [windowDelete,setWindowDelete] = useState(false)
  const [completed,setCompleted] = useState([])
  

  



  function handleDelete(event){
    setWindowDelete(true)
    setToDo(prev => prev.map((el) => el.id === event.target.id? ({...el,deleteTask:true}):el))
    setCompleted(prev => prev.map((el) => el.id === event.target.id? ({...el,deleteTask:true}):el))

    

}

 

  function disagree(){
      setWindowDelete(false)
      setToDo(prev => prev.map((el)=> ({...el,deleteTask:false})))
     
  }

    function agree(){
      setWindowDelete(false)
      setToDo(prev=> prev.map(el=> el.deleteTask === false?el:{}))
      setCompleted(prev=> prev.map(el=> el.deleteTask === false?el:{}))
      
    
    }
 



  return (
    <>
    <div className = "forDeleteWindow" style = {{display:windowDelete?"":"none"}}></div>
    <div className = "main" >
      <Parent  handleDelete = {handleDelete} todo = {todo} 
      setToDo = {setToDo}  agree = {agree} disagree = {disagree}
      windowDelete = {windowDelete} completed = {completed} setCompleted = {setCompleted}/>
      {windowDelete?<DeleteWindow   todo = {todo} disagree = {disagree} agree = {agree}/>:null}
    </div>
 
    </>
    );
  }
  
export default App;
