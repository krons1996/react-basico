import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link className="nav-link" to="/carros">Carros</Link>
            <Link className="nav-link" to="/array">Array</Link>
            <Link className="nav-link" to="/objeto">Objeto</Link>
            <Link className="nav-link" to="/contador">Contador</Link>
            <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
           </Nav>
        </Container>
      </Navbar>
      <ul>
        <li><a href="">Página 1</a></li>
        <li><a href="">Página 2</a></li>
        <li><a href="">Página 3</a></li>

      </ul>
    </div>
  )
}

export default Menu