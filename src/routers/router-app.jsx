import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { International } from "../pages/international"
import { Sports } from "../pages/sports"

export const RouterApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<International />}/>
          <Route path='/sports' element={<Sports />}/>
  
          <Route path='*' element={ <Navigate to='/' replace /> } />
        </Routes>
      </BrowserRouter>
    )
} 