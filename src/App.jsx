import React from 'react';
import { Routes, Route } from "react-router-dom"

import { Home, Menu, ContactUs } from "./pages"
import Header from './layouts/Header';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header /> } >
        <Route path='menu' element={<Menu />} ></Route>
        <Route path='contact-us' element={<ContactUs />} ></Route>

        <Route path='*' element={<h1>404</h1>} ></Route>
        <Route index element={<Home />} ></Route>
      </Route>
    </Routes>
  )
}

export default App
