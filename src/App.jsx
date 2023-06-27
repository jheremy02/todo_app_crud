

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import GlobalContext from "./context/GlobalContext";
import useInitialStateGlobalContext from "./hooks/initialStateGlobalContext";



function App() {

  const initialGlobalContext=useInitialStateGlobalContext()

  return (
    <>
      <GlobalContext.Provider value={initialGlobalContext}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout></Layout>}>
              <Route element={<TaskList></TaskList>} index></Route>
              <Route path="add" element={<TaskForm></TaskForm>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
