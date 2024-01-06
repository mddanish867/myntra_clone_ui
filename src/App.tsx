import "./App.css";
import Homepage from "./Pages/Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfoun from "./Pages/Notfound/Notfoun";
import Login from "./Authentication/Login";
import Catalog from "./Pages/Productcatalog/Catalog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="catalog" element={<Catalog />} />

          <Route path="*" element={<Notfoun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
