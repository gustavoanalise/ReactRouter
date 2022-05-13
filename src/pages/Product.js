import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'

const Product = () => {
    // 4- Rota dinâmica
    const { id } = useParams();

  return (
      <div>ID do Produto: {id}</div>
  )
}

export default Product