import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const OrderSummary = ({selectedItems}) => {
    const [selectedItem,setSelectedItem] = useState([])
    const [totalItem,setTotalItem] = useState(1)
    const [price,setPrice] = useState(0)
  
    useEffect(()=>{
        setSelectedItem(selectedItems)
    },[selectedItems])

    function totalPrice () {
      selectedItem.map((items)=>{
        setPrice(items.price)
        setPrice(totalItem * items.price)
      })
    }
   

    const handlePlus = () =>{
      setTotalItem(totalItem + 1)
     totalPrice()
    }

    const handleMinus = () =>{
      if(totalItem > 0){
        setTotalItem(totalItem - 1)
      }
      totalPrice()
    }

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Deliver to : keshod - 362220
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                  
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
{/* looping part */}
           {selectedItem.map((items,index)=>{
            return(
                <div key={index}  className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={items?.imageUrl}
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{items?.name}</a>
                            </h3>
                            <p className="ml-4">₹{price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {items?.ingredients}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>
                          {/* counter button */}
                          <div style={{display : "flex"}}>
                            <button style={{border : "2px solid black",borderRadius : "20px",width : "20px"}} onClick={handleMinus}>-</button>
                            <p>{totalItem}</p>
                            <button style={{border : "2px solid black",borderRadius : "20px",width : "20px"}} onClick={handlePlus}>+</button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                <hr />
                </div>
              </div>

            )
           })}
            
              
          </div>
  )
}

export default OrderSummary