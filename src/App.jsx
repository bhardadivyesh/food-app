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
  const [items,setItems] = useState([])
  console.log(items);
  if(items.length > 2){
    console.log("items length is 1");
  }
  useEffect(()=>{
    setMenuItems(data.data)
    setSelectedItem((prevSelectedItems) => [...prevSelectedItems,items])
  },[data,items])
  return (
    <>
    <dataContext.Provider value={{menuItems,selectedItem,setItems}}>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={[ <Navbar key="navbar" />,<Body key="body"/> ]}/>
        <Route path='/pizza' element={<PizzaItem  />} />
        <Route path='/italian' element={<ItalianItems  />} />
        <Route path='/pasta' element={<PastaItems  />} />
        <Route path='/salad' element={<SaladItems />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
    </dataContext.Provider>
     </>
  )
}
export default App