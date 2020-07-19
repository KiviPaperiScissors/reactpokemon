import React from 'react'

const Pokemon = ({pokemon}) => {

  return (
  <div>
    <div><b>Name:</b> {pokemon.name}</div>
    <div>Attack: {pokemon.attack}</div>
    <div>Defense: {pokemon.defense}</div>
    <div>Hit points: {pokemon.hp}</div>
  </div>
  )
}

export default Pokemon
