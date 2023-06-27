import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"



function Task({task}) {

    const {state,delete_task}=useContext(GlobalContext)
    
    function deleteOnClick() {
        delete_task(task)
    }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {task.id}
                    </th>
                    <td className="px-6 py-4">
                        {task.title}
                    </td>
                    <td className="px-6 py-4">
                        {task.description}
                    </td>
                    <td className="px-6 py-4">
                        {task.done?(<span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Done</span>): <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pending</span> }
                    </td>
                    <th>
                    <button onClick={deleteOnClick} type="button" className=" bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-3 py-2 text-sm text-center text-white">Delete</button>
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Green</button>
                    </th>
                    
                </tr>
  )
}

export default Task