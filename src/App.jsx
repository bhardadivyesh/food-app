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
function App() {
  const [menuItems,setMenuItems] = useState([])
  const [selectedItem,setSelectedItem] = useState([]);
  console.log(selectedItem);
  useEffect(()=>{
    setMenuItems(data.data)
  },[data])
  const handleItemSelect = (item) => {
    setSelectedItem((prevSelectedItems) => [...prevSelectedItems, item]);
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={[ <Navbar key="navbar" selectedItem={selectedItem} />,  <Body key="body"/> ]}/>
        <Route path='/pizza' element={<PizzaItem menuItems={menuItems} onItemSelect={handleItemSelect} selectedItem={selectedItem} />} />
        <Route path='/italian' element={<ItalianItems menuItems={menuItems} onItemSelect={handleItemSelect} selectedItem={selectedItem} />} />
        <Route path='/pasta' element={<PastaItems menuItems={menuItems} onItemSelect={handleItemSelect} selectedItem={selectedItem} />} />
        <Route path='/salad' element={<SaladItems menuItems={menuItems} onItemSelect={handleItemSelect} selectedItem={selectedItem} />} />

        <Route path='/cart' element={<Cart selectedItem={selectedItem} />} />
        <Route path='/checkout' element={<CheckOut selectedItem={selectedItem}/>} />
      </Routes>
    </BrowserRouter>
     </>
  )
}
export default App