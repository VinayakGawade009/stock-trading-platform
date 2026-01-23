import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";

function App() {

  return (
    <>
      <BrowserRouter>
        <GeneralContextProvider>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
          
        </GeneralContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App;