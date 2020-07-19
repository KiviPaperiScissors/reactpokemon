import React from 'react'

import './App.css'
import PokeTable from './components/PokeTable'

const pokemons = [
  {
    name: 'Pikkas',
    attack: 109,
    defense: 10,
    hp: 43
  },
  {
    name: 'Bubb',
    attack: 1322,
    defense: 1230,
    hp: 343
  }
]

const App = () => (
  <div>
    <h1>
      Pokemon things!
    </h1>
    <PokeTable pokemons = {pokemons} />
  </div>
)


export default App
