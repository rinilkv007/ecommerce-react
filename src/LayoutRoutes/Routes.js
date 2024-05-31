import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header'
import Foter from '../components/Footer/Foter'
import Home from '../components/Home/Home'
import Logout from '../components/Logout/Logout'
import ProductDetails from '../components/ProductDetails/ProductDetails'

function RoutesLayout() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path ='/ecommerce-react' element={<Home/>}/>
            <Route path ='/logout' element={<Logout/>}/>
            <Route path ='/product/:id' element={<ProductDetails/>}/>

        </Routes>
        <Foter/>
    </Router>

    </>
  )
}

export default RoutesLayout