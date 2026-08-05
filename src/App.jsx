import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectPage from "./components/ProjectPage";
//when in development, use basename="/" 
//when in production, use basename="/portfolio/"
import {
  About, Contact, Experience, Hero, Navbar, Works,
} from './components';
import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>

              <Works />

              <div className="relative z-0">
                <Contact />
              </div>
            </div>
          }
        />

        <Route
          path="/projects/:slug"
          element={<ProjectPage />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

    </BrowserRouter>

  )
}

export default App
