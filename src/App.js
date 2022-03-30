import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from "react-bootstrap"
import Box from './components/Box';
import Pagina1 from './pages/Pagina1';
import Array from './pages/Array';
import Objeto from './pages/Objeto';
import Carros from './pages/Carros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>


      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Carros />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/objeto" element={<Objeto />} />
          <Route path="/array" element={<Array />} />
          <Route path="/pagina1" element={<Pagina1 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
