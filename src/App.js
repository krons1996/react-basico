import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Container } from "react-bootstrap"
import Box from './components/Box';
import Pagina1 from './pages/Pagina1';
import Array from './pages/Array';
import Objeto from './pages/Objeto';
import Carros from './pages/Carros';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contador from './pages/Contador';
import FilmesPopulares from './pages/filmes/FilmesPopulares';


function App() {
  return (
    <div>


      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Carros />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="/objeto" element={<Objeto />} />
            <Route path="/array" element={<Array />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/filmes/populares" element={<FilmesPopulares />} />
          </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;
