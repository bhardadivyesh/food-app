/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../context/context";
function Cart() {
  const value = useContext(dataContext)
  console.log(value.selectedItem);

  const totalPrice = value.selectedItem.reduce((total, items) => total + items.price, 0);
 
  const navigate = useNavigate();
  function handleBackClick() {
    navigate("/pizza");
  }
  function handleCheckoutClick(){
    navigate("/checkout")
  }
  return (
    <>
    <div className="fixed inset-0 overflow-hidden z-50">
  <div className="absolute inset-0 overflow-hidden bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 overflow-hidden flex items-center justify-center">
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
      <div className="flex justify-between border-b border-gray-200 px-6 py-4">
        <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
        <button type="button" className="text-gray-400 hover:text-gray-500">
          <span className="sr-only">Close panel</span>
        </button>
      </div>
      <div className="overflow-y-auto">
        <div className="px-6 py-4">
          {value.selectedItem?.map((items, index) => {
            return (
              <div key={index} className="flex items-start justify-between mb-4">
                <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md border border-gray-200">
                  <img src={items?.imageUrl} alt="Product" className="w-full h-full object-cover object-center" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-base font-medium text-gray-900"><a href="#">{items?.name}</a></h3>
                  <p className="mt-1 text-sm text-gray-500">{items?.ingredients}</p>
                  <p>₹{items.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>₹{totalPrice}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-4">
            <button type="button" className="block w-full py-3 px-6 text-center bg-indigo-600 border border-transparent rounded-md text-base font-medium text-white shadow-sm hover:bg-indigo-700" onClick={handleCheckoutClick}>
              Checkout
            </button>
          </div>
          <div className="mt-2 flex justify-center text-sm text-gray-500">
            <p>or</p>
            <button type="button" className="ml-1 text-indigo-600 hover:text-indigo-500 font-medium" onClick={handleBackClick}>
              Continue Shopping <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>     
    </>
  );
}
export default Cart;