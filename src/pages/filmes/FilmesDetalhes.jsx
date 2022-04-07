import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../services/apiFilmes'




const FilmesDetalhes = () => {
  
  const [filme, setFilme] = useState({})

  useEffect(() => {
    apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado => {
      setFilme(resultado.data)
    })
  }, [])


  const params = useParams()

  return (
    <div><h1>Filmes Detalhes: {filme.title} </h1></div>
  )
}

export default FilmesDetalhes