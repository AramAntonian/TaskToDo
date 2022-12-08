import {v4 as uuid} from "uuid"


const initialValue = [
    {
        id:uuid(),
        text:"Researching, designing, implementing software programs.",
        isCompleted:false,
        deleteTask:false,

    },
    {
        id:uuid(),
        text:"Testing and evaluating new programs. ",
        isCompleted:false,
        deleteTask:false,

    },
    {
        id:uuid(),
        text:"Identifying areas for modification in existing programs.",
        isCompleted:false,
        deleteTask:false,

    },
    {
        id:uuid(),
        text:"Writing and implementing efficient code.",
        isCompleted:false,
        deleteTask:false,
    },
]


export default  initialValue