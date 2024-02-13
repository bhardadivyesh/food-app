/* eslint-disable react/prop-types */
import cartImg from "../../assets/cartImg.png"
import { useNavigate,Link } from "react-router-dom";
function Navbar({items}) {
  const navigate = useNavigate()
  const addToCart = () =>{
    navigate("/cart")
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
          <Link to="/pizza" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Pizza</Link>
       </li>
       <li>
          <Link to="/italian" className="block py-2 px-3 text-white  md:bg-transparent md:text-black md:p-0 dark:text-white " aria-current="page">Italian</Link>
       </li>
       <li>
          <Link to="/pasta" className="block py-2 px-3 text-white  md:bg-transparent md:text-black md:p-0 dark:text-white " aria-current="page">Pasta</Link>
       </li>
       <li>
          <Link to="/salad" className="block py-2 px-3 text-white  md:bg-transparent md:text-black md:p-0 dark:text-white " aria-current="page">Salad</Link>
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
