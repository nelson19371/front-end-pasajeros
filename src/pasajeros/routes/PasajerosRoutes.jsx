import { Navbar } from "../components"


export const PasajerosRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route path="minaPage" element ={<MinaPage/>}/>
        <Route path="pasajeros" element ={<PasajerosPage/>}/>
        <Route path="login" element= {<LoginPage/>}/>
        

        <Route path ="/" element={<Navigate to ="/minaPage"/>}/>
    </Routes>
    </>
  )
}
