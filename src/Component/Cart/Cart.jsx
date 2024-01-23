/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";


function Cart(props) {
  const { selectedItems } = props.location.state;
  console.log(selectedItems);

  const navigate = useNavigate();
  function handleBackClick() {
    navigate("/menu");
  }
  return (
    <>
      <div style={{ display: "flex",height : "500px" }}>
        <button onClick={handleBackClick}>Back</button>
        
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
        <div style={{width : "50%",border : "1px solid black",borderRadius : "10px"}}>
          <h1>PRICE DETAIL</h1>
          <hr />
          <div style={{display : "flex"}}>
          <h2>Price (2 items)</h2>
          <h2>₹12000</h2>
          </div>
          <div style={{display : "flex"}}>
            <h2>Discount</h2>
            <h2>₹8,659</h2>
          </div>
          <div style={{display : "flex"}}>
            <h2>Delivery Charges</h2>
            <h2>₹280Free</h2>
          </div>
          <div style={{display : "flex"}}>
            <h2>Total Amount</h2>
            <h2>₹2,884</h2>
          </div>
          <div style={{display : "flex"}}>
            <p>You will save ₹8,659 on this order</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
