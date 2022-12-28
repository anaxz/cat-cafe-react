import { Routes, Route } from "react-router-dom"

import { Home } from "./pages"
import Header from './layouts/Header';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header /> } >
        <Route path='/home' element={<Home />}></Route>
        
        <Route path='*' element={<h1>404</h1>} ></Route>
      </Route>
      
      {/* <Route index element={<Home />} ></Route> */}
    </Routes>
  )
}

export default App
