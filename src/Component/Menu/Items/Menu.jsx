/* eslint-disable react/prop-types */
import Navbar from "../../Navbar/Navbar";
import { Link} from "react-router-dom";
// import Spinner from "../../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Menu({menuItems}) {
    const [selectedIds,setSelectedIds]= useState([])
  const navigate = useNavigate();
  function handleCartClick(){
    const selectedItems = menuItems.filter((item) => item.id);
    console.log(selectedItems);
   
    navigate('/cart', { state: { selectedItems } });

  }
   // Toggle the selection of an item
   const handleItemToggle = (itemId) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(itemId)) {
        return prevSelectedIds.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedIds, itemId];
      }
    });
    };
 
  return (
    <>
      {/* { <Spinner />} */}
      { <Navbar />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {menuItems.map((items)=>{
          return(
            <>
            
               <div key={items.id}
            className="max-w-sm bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href="#">
              <img
                className="rounded-t-lg w-full"
                src={items.imageUrl}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {items.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of
                2021 so far, in reverse chronological order.
              </p>
              <h5>Price: {items.price}</h5>
              <button onClick={() => handleItemToggle(items.id)}>
              {selectedIds.includes(items.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
           <button onClick={handleCartClick}>
            Go To Cart
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

export default Menu;
