import React from 'react'
import { Navigate, Route, Routes} from "react-router-dom"
import { LoginPage } from '../auth/pages/LoginPage'
import { PasajerosRoutes } from '../pasajeros'
import { Navbar } from '../pasajeros/components'
import { MinaPage } from '../pasajeros/page/minaPage'
import { PasajerosPage } from '../pasajeros/page/pasajerosPage'

export const AppRouter = () => {
  return (
   <>
   <Navbar/>
    <Routes>
        
       
        <Route path="login" element= {<LoginPage/>}/>
        <Route path="/*" element= {<PasajerosRoutes/>}/>
        

        
    </Routes>
   </>
  )
}
