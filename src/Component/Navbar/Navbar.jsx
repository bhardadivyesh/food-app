/* eslint-disable react/prop-types */

import cartImg from "../../assets/cartImg.png"

function Navbar(props) {

  const {cart} = props

  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900 bg-yellow-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
              Real Pizza
            </span>
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
             <img src={cartImg} style={{height : "20px"}}/>
             <span>{cart}</span>
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
