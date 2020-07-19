import React from 'react'
import Pokemon from './Pokemon'


const PokeTable = ( {pokemons} ) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            Team 1
          </td>
          <td>
            Team 2
          </td>
        </tr>
        <tr>
          <td>
            <Pokemon pokemon = {pokemons[Math.floor(Math.random() * 2)]} />
          </td>
          <td>
            <Pokemon pokemon = {pokemons[Math.floor(Math.random() * 2)]} />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default PokeTable
