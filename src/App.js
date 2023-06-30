import {  Route, Routes } from "react-router-dom"
import Home from "./Home"
import Layout from "./components/Layout"


function App() {
  return (
    <main className="App">
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
     </main>
  )
}

export default App
