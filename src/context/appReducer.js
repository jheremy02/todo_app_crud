import { v4 as uuidv4  } from "uuid";

function add_task(state,task) {

    const new_task={
        ...task,
        id:uuidv4(),
        done:false,
        
    }

    const current_tasks=[...state.tasks]
    current_tasks.push(new_task)
    

    return {...state,tasks:[...current_tasks]};
}


function delete_task(state,task) {
    const current_tasks=state.tasks.filter((item)=>(item.id!==task.id))

    return {...state,tasks:[...current_tasks]};
}



function appReducer(state,action) {
    
    switch (action.type) {
        case "ADD_TASK":
            
            return add_task(state,action.payload)

        case "DELETE_TASK":
            return delete_task(state,action.payload)
       
        default:
            break;
    }

    return {...state,task:[...state.task,action.payload]}

}

export default appReducer