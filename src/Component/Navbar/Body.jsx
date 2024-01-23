import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const [name, setName] = useState("");
  const navigate = useNavigate()
  function handleChange(e) {
    let name = e.target.value;
    setName(name);
  }
  const handleSubmit = () =>{
    navigate("/menu")
  }
 
  return (
    <>
      <div>
        <h1>The best pizza.</h1>
        <h4>Straight out of the oven, straight to you.</h4>
      </div>
      <div>
        <h3>👋 Welcome! Please start by telling us your name:</h3>
        <input
          type="text"
          id="first_name"
          value={name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-50% p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your name"
        />
        {name.length >=3 && (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Start Ordering
          </button>
        )}
      </div>
    </>
  );
}

export default Body;
