import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const Objeto = () => {
  const carros = [
    { marca: 'VW', modelo: 'Fusca', cor: 'Branco', ano: 1980, foto: 'https://conteudo.imguol.com.br/c/entretenimento/84/2020/10/26/volkswagen-fusca-itamar-inflacionado-1603745128011_v2_450x337.jpg' },
    { marca: 'Ford', modelo: 'Ka', cor: 'Preto', ano: 2004, foto: 'http://2.bp.blogspot.com/--tI3ghAIgZ0/TVSQYHVBoPI/AAAAAAAAFWg/B_8jp0DIUbw/s640/Ford-KA-2004-usado.JPG' },
    { marca: 'Nissan', modelo: '360z', cor: 'Verde', ano: 2001, foto: 'https://1.bp.blogspot.com/-rdlXFZqdg3U/X3sKf28_jjI/AAAAAAAAcmI/2k5ypUm3uOIpAtDI-k7DU-VhXFAhD2tYwCLcBGAsYHQ/s1024/Nissan-350Z-1024x555.webp' },
    { marca: 'VW', modelo: 'Polo', cor: 'Cinza', ano: 2006, foto: 'https://pinguimautomoveis.com.br/carros/e737a51fa8dab5039b34606a462dc4a3-thumbjpg-volkswagen-polo-8544427-1000-750-70.jpg' },
    { marca: 'VW', modelo: 'Golf', cor: 'Cinza', ano: 2009, foto: 'https://4.bp.blogspot.com/-uPMOVLlauFo/WYxyPH912_I/AAAAAAACntA/_kmbabwYSLgnbOkAIWzzEYsPh2Xd6WU9QCLcBGAs/s1600/VW-Golf-2009%2B%252815%2529.jpg' },
    { marca: 'VW', modelo: 'Gol', cor: 'Branco', ano: 2020, foto: 'https://www.schenkelautomoveis.com.br/carros/036308be7ffdf2ba558ab5166a75a8a2-thumbjpeg-volkswagen-gol-8589939-1000-750-70.jpg' },]

  return (
    <div>
      <h1>Objeto</h1>
      <h2>Carros</h2>
      <Row >
      {carros.map(item => (
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={item.foto} />
            <Card.Body>
              <Card.Title><strong>{item.marca} - {item.modelo}</strong></Card.Title>
              <Card.Text>
                <p><strong>Cor: </strong>{item.cor}</p>
                <p><strong>Ano: </strong>{item.ano}</p>
              </Card.Text>
              <Button variant="danger">Mais detralhes</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div >
  )
}
export default Objeto