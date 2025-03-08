import { Routes, Route } from "react-router-dom";
// import "./App.css"

import Home from "./page/Home";
import NotFound from "./page/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
