import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
        <div className="">
        <Navbar></Navbar>
    <section class="bg-white dark:bg-gray-900">
    
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <Outlet></Outlet>
    </div>
</section>
        </div>
    </>
  )
}

export default Layout