/* eslint-disable react/prop-types */

const PaymentMethod = ({payment}) => {


  function handlePaymentClick(){
    payment("Case On Delivery")
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 md:text-5xl">Payment Method</h2>
        <div className="flex items-center mb-4">
          <input
            id="case-on-delivery"
            type="radio"
            value="case on delivery"
            name="radio1"
            onClick={handlePaymentClick}
            className="w-4 h-4 text-blue-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
           htmlFor="case-on-delivery"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Cash On Delivery
          </label>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
