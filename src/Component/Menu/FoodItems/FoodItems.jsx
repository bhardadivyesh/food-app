/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link} from "react-router-dom";
// import Spinner from "../../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
function FoodItems({menuItems,onItemSelect}) {
  
  const [selectedItems,setSelectedItems] = useState([])
  console.log(selectedItems);
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    onItemSelect(item);
    navigate("/cart")
  };
  
  return (
    <>
      {/* { <Spinner />} */}
      { <Navbar />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {menuItems.map((item)=>{
          return(
            <>
               <div key={item.id}
            className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <img
                className="rounded-t-lg w-full"
                src={item.imageUrl}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of
                2021 so far, in reverse chronological order.
              </p>
              <h5>Price: {item.price}</h5>
              <button  onClick={() => handleItemClick(item)}  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
            Add to cart
            </button>
          
            </div>
          </div>
            </>
          )
        })}
      </div>
      <button onClick={"handleNavigate"}>Move to cart</button>
    </>
  );
}

export default FoodItems;
