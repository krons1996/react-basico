import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

  const [filmes, setFilmes] = useState([])
  const posterurl = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    apiFilmes.get('movie/popular?language=pt-BR').then(resultado => {
      setFilmes(resultado.data.results)
    })
  }, [])

  console.log(filmes.length)

  return (
    <div>
      <h1>Filmes Populares</h1>

      {filmes.length === 0 && <h1>Carregando...Aguarde</h1>}
      
      <Row>
        {filmes.map(item => (          
          <Col key={item.id} md={3} className="mb-3">
            <Card>
              <Card.Img variant="top" src={posterurl + item.poster_path}></Card.Img>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.original_title}</Card.Text>
                <Card.Text>Populariade: {item.popularity}</Card.Text>
                <Link className="btn btn-danger" to={'/filmes/' + item.id}>Ver Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default FilmesPopulares