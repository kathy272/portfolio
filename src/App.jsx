import { BrowserRouter, Routes, Route } from "react-router-dom"
//when in development, use basename="/" 
//when in production, use basename="/portfolio/"
import {
  About, Contact, Experience, Hero, Navbar, Works,
} from './components';

const App = () => {
  return (
    <BrowserRouter basename="/portfolio/">
      <Routes>
        <Route path="/" element={
          <div className="relative z-0 bg-primary">
            <div className="bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <div className="relative z-0">
              <Contact />
            </div>

          </div>

        } />
      </Routes>

    </BrowserRouter>

  )
}

export default App
