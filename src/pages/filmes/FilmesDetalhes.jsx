import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, DropdownButton, Dropdown } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'




const FilmesDetalhes = () => {

  const params = useParams()

  const [filme, setFilme] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
      setFilme(resultado.data)
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
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
              </Card>
            </Col>
            <Col md={8}>
              <p><strong>Título Original: </strong>{filme.original_title}</p>
              <p><strong>Popularidade: </strong>{filme.popularity}</p>
              <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
              <p><strong>Orçamento: </strong>{filme.budget}</p>
              <p><strong>Gêneros: </strong>
                {filme.genres.map(item => (

                  <p>{item.name}</p>


                ))}</p>
              <p><strong>Sinopse: </strong>{filme.overview}</p>
              <Button className="btn btn-danger" onClick={() => navigate(-1)}>Voltar</Button>
            </Col>
          </Row>
        </>
      }
    </div>
  )
}

export default FilmesDetalhes