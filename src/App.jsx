import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Menu from "./Component/Menu/Items/Menu"
import Cart from "./Component/Cart/Cart"
import Index from './Component/Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [menuItems,setMenuItems] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/data").then((res)=>{
      // console.log(res.data);
      setMenuItems(res.data)
    })
  },[])
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/menu' element={<Menu menuItems={menuItems}/>} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </BrowserRouter>

         </>
  )
}

export default App
