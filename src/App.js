import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Layout from "./components/Layout"
import Cases from "./Cases"
import About from "./About"
import Contact from "./Contact"
import Carousel from "./components/Carousel"

function App() {
  return (
    <main className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/CasesAndClients" element={<Cases />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Carousel />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
