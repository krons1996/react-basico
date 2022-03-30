import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import Box from '../components/Box'

const Pagina1 = () => {
  return (
    <div>        
      <Box title="Sucesso!">
      <p>Operação foi um sucesso!</p>
    </Box>
      <Box cor="info">
        <p>Operação é uma informação</p>
      </Box>
      <Box cor="warning" title="Atenção">
        <p>Operação foi um aviso!</p>
      </Box>

      <h1>HELLO WORLD</h1>
      <h1>Italo</h1>
      <Button variant="primary">Primary</Button>
      <Alert variant="danger">
        This is a danger alert—check it out!
      </Alert></div>
  )
}

export default Pagina1