import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import './components/Header/Header.css'
import './App.css'
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer'
import { LandingPage } from './components/landingPage/LandingPage'
import { AboutUs } from './components/aboutUs/AboutUs'
import { ContactUs } from './components/contactUs/ContactUs'
import { CartContainer } from './components/cartContainer/CartContainer'
// import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer'
function App() {

  return (
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/productos" element={<ItemListContainer />}>
      <Route path=":category" element={<ItemListContainer />} />
    </Route>
    <Route path="/nosotros" element={<AboutUs />} />
    <Route path="/contacto" element={<ContactUs />} />
    <Route path="/carrito" element={<CartContainer />} />
    <Route path="/producto/:id" element={<ItemDetailContainer />} />
  </Routes>
</BrowserRouter>

  )
}

export default App