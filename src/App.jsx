import { BrowserRouter, Routes, Route } from "react-router-dom"

import{
  About, Contact, Experience, Hero, Navbar, Works, } from './components';

const App = () => {
    console.log("App component rendered");
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <div className="relative z-0 bg-primary">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
      </div>
      
    </div>

      } />

   
    </Routes>

    </BrowserRouter>
     
  )
}

export default App
