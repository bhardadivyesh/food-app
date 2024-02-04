/* eslint-disable react/prop-types */

import { useState } from "react";
import cartImg from "../../assets/cartImg.png"
import { useNavigate,Link } from "react-router-dom";
function Navbar({items}) {
  const [category,setCategory] = useState("pizza")
  console.log(category);
  const navigate = useNavigate()
  
  const addToCart = () =>{
    navigate("/cart")
  }
  const handlePizza = () =>{
    setCategory("pizza")
  }
  const handleChiness = () =>{
    setCategory("chiness")
  }
  const handlePunjabi = () =>{
    setCategory("punjabi")
  }
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 bg-yellow-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
              Real Pizza
            </span>
           {/* navbar items */}
           <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link onClick={handlePizza} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Pizza</Link>
        </li>
        <li>
          <Link onClick={handleChiness} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chiness</Link>
        </li>
        <li>
          <Link onClick={handlePunjabi} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Punjabi</Link>
        </li>
      </ul>
    </div>
           {/* navbar over */}
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
             <label>{items?.length}</label>
             <img src={cartImg} style={{height : "20px",cursor : "pointer"}} onClick={addToCart}/>
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
