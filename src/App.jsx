import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import FoodItems from "./Component/Menu/FoodItems/FoodItems"
import Cart from "./Component/Cart/Cart"
import Index from './Component/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [menuItems,setMenuItems] = useState([])
  const [selectedItem,setSelectedItem] = useState(null);

  useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
      // console.log(res.data);
      setMenuItems(res.data)
    })
  },[])
  const handleItemSelect = (item) => {
    // Handle the selected item details
    setSelectedItem(item);
  };
  return (
    <>
    <BrowserRouter>
      <Routes>
        
       
        <Route path='/' element={<Index />}/>
        <Route path='/menu' element={<FoodItems menuItems={menuItems} onItemSelect={handleItemSelect}/>} />
        <Route path='/cart' element={<Cart selectedItem={selectedItem} />} />

      </Routes>
    </BrowserRouter>

         </>
  )
}

export default App
