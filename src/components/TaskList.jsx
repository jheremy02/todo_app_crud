
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import Task from "./Task";



function TaskList() {

const {state,setState}=useContext(GlobalContext) ;
const [modalIsOpen, setIsOpen] = useState(false);
const {tasks}=state
  return (

    <div>
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                       Task ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Done
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {tasks.map((item)=>(<Task task={item} key={item.id}></Task>))}
            </tbody>
        </table>
    </div>
    </div>

  )
}

export default TaskList