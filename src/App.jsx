import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import FoodItems from "./Component/Menu/FoodItems/FoodItems"
import Cart from "./Component/Cart/Cart"
// import Index from './Component/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Component/Navbar/Navbar'
import Body from './Component/Navbar/Body'
import CheckOut from "../src/Component/Checkout/CheckOut"

function App() {
  const [menuItems,setMenuItems] = useState([])
  const [selectedItem,setSelectedItem] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
      setMenuItems(res.data)
    })
  },[])
  const handleItemSelect = (item) => {
    setSelectedItem((prevSelectedItems) => [...prevSelectedItems, item]);
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
       {/* <Route path='/' element={[<Navbar key="navbar" selectedItem={selectedItem} />,<Body key="body"/>]}/> */}
       <Route path='/' element={[ <Navbar key="navbar" selectedItem={selectedItem} />,  <Body key="body"/> ]}/>
        <Route path='/menu' element={<FoodItems menuItems={menuItems} onItemSelect={handleItemSelect}/>} />
        <Route path='/cart' element={<Cart selectedItem={selectedItem} />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
