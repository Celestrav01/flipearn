import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListing from './pages/MyListing'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'
import Navbar from './components/Navbar'
import Message from './pages/Message'
import ChatBox from './components/chatbox'
import {Toaster} from 'react-hot-toast'

const App = () => {


  const {pathname} = useLocation();
  return (
    <div>
      <Toaster/>
      {!pathname.includes('/admin' ) && <Navbar />} 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/marketplace' element={<Marketplace/>} />
        <Route path='/my-listings' element = {<MyListing/>} />
        <Route path='/listing/:listingId' element={<ListingDetails/>} />
        <Route path='/create-listing' element={<ManageListing/>} />
        <Route path='/edit-listing/:id' element={<ManageListing/>} />
        <Route path='/my-orders' element={<MyOrders/>} />
        <Route path='/messages' element={<Message/>} />
        <Route path='/loading' element={<Loading/>} />
      </Routes>
      <ChatBox/>
    </div>
  )
}

export default App