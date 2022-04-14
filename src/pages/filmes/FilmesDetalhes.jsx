import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'




const FilmesDetalhes = () => {

  const params = useParams()

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
      setFilme(resultado.data)
    })
  }, [])

  useEffect(() => {
    apiFilmes.get('movie/' + params.id + '/credits?language=pt-BR').then(resultado => {
      setAtores(resultado.data.cast)
    })
  }, [])


  return (
    <div>
      {!filme.id && <h1>Carregando...Aguarde!</h1>}

      {filme.id &&
        <>
          <h1>{filme.title}</h1>
          <Row >
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original/' + filme.poster_path} />
              </Card>
            </Col>
            <Col md={8}>
              <p><strong>Título Original: </strong>{filme.original_title}</p>
              <p><strong>Popularidade: </strong>{filme.popularity}</p>
              <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
              <p><strong>Orçamento: </strong>{filme.budget}</p>
              <p><strong>Gêneros: </strong>
                {filme.genres.map(item => (
                  <spam key={item.id}>{item.name}, </spam>
                ))}</p>
              <p><strong>Sinopse: </strong>{filme.overview}</p>
              <Button className="btn btn-danger" onClick={() => navigate(-1)}>Voltar</Button>
            </Col>
          </Row>
          <Col md={12} className="mt-3">
          <h1>Atores</h1>
          </Col>
          <Row >
            {atores.map(item => (
              <Col md={4} className="mb-3" key={item.id}>
                <Card >
                  <Link to={'/ator/' + item.id }>
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original/' + item.profile_path}>
                  </Card.Img>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      }
    </div>
  )
}

export default FilmesDetalhes