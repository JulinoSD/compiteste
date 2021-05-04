// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'
// import { NextApiRequest, NextApiResponse } from 'next'
// import { useState } from 'react'

// export default function pokemon(req: NextApiRequest, res: NextApiResponse) {
//   return (
//     fetch('https://pokeapi.co/api/v2/pokedex/1')
//       .then((serverResponse) => 
//          serverResponse.json()
//       )
//       .then((data) => {
//         console.log(data)
//         res.status(200).json('ok' + data)
//       })
//   )
// }

// export const AppPok = async () => {

//   const [pokemon, setPokemon] = useState([''])

//   const getPokemon = async () => {
//     const toArray = []
//     try {
//       const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
//       const res = await axios.get(url)
//       console.log(res)
//     } catch (e) {
//       console.log(e)
//     }

//   }

// }
// export const pokeApi = async () => {
//   const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
//   const data = res.data
//   console.log('Imprimindo os dados: ' + data)
//   return {
//     data: data
//   }
// }

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=151'
})
