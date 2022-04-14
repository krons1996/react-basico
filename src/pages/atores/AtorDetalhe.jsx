import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'

const AtorDetalhe = () => {
    const params = useParams()
    const [ator, setAtor] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        apiFilmes.get('person/' + params.id + '?language=pt-BR').then(resultado => {
            setAtor(resultado.data)
        })
    }, [])
    return (
        <div>
            {!ator.id && <h1>Carregando...Aguarde!</h1>}
            <h1>{ator.name}</h1>
            <Row >
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/original/' + ator.profile_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><strong>Conhecido também como: </strong>{ator.also_known_as}</p>
                    <p><strong>Biografia: </strong>{ator.biography}</p>
                    <p><strong>Aniversário: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p><strong>Conhecido no Departamento: </strong>{ator.known_for_department}</p>
                    <Button className="btn btn-danger" onClick={() => navigate(-1)}>Voltar</Button>
                </Col>
            </Row>
        </div>
    )
}

export default AtorDetalhe