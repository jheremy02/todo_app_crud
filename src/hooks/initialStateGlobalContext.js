import { useReducer} from "react";

import appReducer from "../context/appReducer";
const initialState={ tasks:[
    {
        id:"1",
        title:"title one",
        description:"some description",
        done:true
    },
    {
        id:"2",
        title:"title two",
        description:"some description",
        done:false
    }
] }




function useInitialStateGlobalContext() {
    
    
    const [state,dispatch] = useReducer (appReducer,initialState)

    function add_task(task) {

        dispatch( {type:"ADD_TASK",payload:task} )
        
    }

    function delete_task(task) {
        dispatch( {type:"DELETE_TASK",payload:task} )
    }
    

    return {state, add_task, delete_task}
}

export default useInitialStateGlobalContext