import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {
    const navigate = useNavigate()
  return (
    <>
    <div>Welcome to the Cards...</div>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  )
}

export default Card