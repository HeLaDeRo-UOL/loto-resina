import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main.jsx";
// import ConsumiendoApis from "./components/ConsumiendoApis/ConsumiendoApis";
// import Footer from "./components/Footer/Footer";
import Cart from "./components/NavBar/ComponentsNavBar/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/NavBar/ComponentsNavBar/Login";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Form from "./components/Form/Form";
// import Articulo1 from "./components/Main/Articulos/Articulo1";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ItemDetail" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Error : 404 "not found"</h1>} />
        <Route path="/Formulario" element = {<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
