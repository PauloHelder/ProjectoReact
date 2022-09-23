import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home'
import Empresa from './Components/Pages/Empresa'
import NovoProjecto from './Components/Pages/NovoProjecto'
import Projectos from './Components/Pages/Projectos'
import Contacto from './Components/Pages/Contacto'
import NavBar from "./Components/layout/NavBar";
import Footer from "./Components/layout/Footer";
import Container from './Components/layout/Container'

function App() {
  return (
    <Router>
      <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/empresa" element={<Empresa/>} />
            <Route path="/novoprojecto" element={<NovoProjecto/>} />
            <Route path="/projectos" element={<Projectos/>} />
            <Route path="/contacto" element={<Contacto/>} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
