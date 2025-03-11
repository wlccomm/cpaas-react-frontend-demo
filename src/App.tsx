import { Routes, Route } from "react-router-dom";
// import "./App.css"

import Home from "./page/Home";
import Ping from "./page/Ping";
import Bootstrap from "./page/Bootstrap";
import NotFound from "./page/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ping" element={<Ping />} />
      <Route path="/bootstrap" element={<Bootstrap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
