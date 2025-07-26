import { BrowserRouter, Routes, Route } from "react-router-dom"

import{
  About, Contact, Experience, Hero, Navbar, Works, ProjectDetails} from './components';
const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={
         <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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

    <Route path="/projects/:name" element={
      <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

        <Navbar/>
        <ProjectDetails/>
      </div>
      </div>
    } />
    </Routes>

    </BrowserRouter>
     
  )
}

export default App
