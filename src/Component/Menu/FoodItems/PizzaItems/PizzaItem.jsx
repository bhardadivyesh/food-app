/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Navbar from "../../../FirstPage/Navbar";
import { Link } from "react-router-dom";
import { dataContext } from "../../../../context/context";
function PizzaItem() {
  const value = useContext(dataContext);
  console.log(value);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(value.selectedItem);
  }, [value.selectedItem]);
  return (
    <>
      {<Navbar items={items} />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {value.menuItems?.pizza?.map((item) => {
          return (
            <>
              <div
                key={item.id}
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
                    {item.ingredients.join()}
                  </p>
                  <h5>Price: ₹{item.price}</h5>
                  <button
                    onClick={() => value.setItems(item)}
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button onClick={"handleNavigate"}>Move to cart</button>
    </>
  );
}
export default PizzaItem;
