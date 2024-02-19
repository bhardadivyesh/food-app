import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import PizzaItem from "./Component/Menu/FoodItems/PizzaItems/PizzaItem"
import Cart from "./Component/Cart/Cart"
import { useEffect, useState } from 'react'
import Navbar from "./Component/FirstPage/Navbar"
import Body from "./Component/FirstPage/Body"
import CheckOut from "../src/Component/Checkout/CheckOut"
import data from "../data.json"
import ItalianItems from './Component/Menu/FoodItems/ItalianItems/ItalianItems'
import PastaItems from './Component/Menu/FoodItems/PastaItems/PastaItems'
import SaladItems from './Component/Menu/FoodItems/SaladItems/SaladItems'
import {dataContext} from "./context/context"
function App() {
  const [menuItems,setMenuItems] = useState([])
  const [selectedItem,setSelectedItem] = useState([]);
  useEffect(()=>{
    setMenuItems(data.data)
  },[data])
  const handleItemSelect = (item) => {
    setSelectedItem((prevSelectedItems) => [...prevSelectedItems, item]);
  };
  return (
    <>
    <dataContext.Provider value={{menuItems,selectedItem}}>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={[ <Navbar key="navbar" />,  <Body key="body"/> ]}/>
        <Route path='/pizza' element={<PizzaItem onItemSelect={handleItemSelect} />} />
        <Route path='/italian' element={<ItalianItems onItemSelect={handleItemSelect} />} />
        <Route path='/pasta' element={<PastaItems onItemSelect={handleItemSelect} />} />
        <Route path='/salad' element={<SaladItems onItemSelect={handleItemSelect} />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
    </dataContext.Provider>
     </>
  )
}
export default App