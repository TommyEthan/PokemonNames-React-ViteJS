import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import PokemonList from "./PokemonList";
import axios, { Axios } from 'axios';
import Pagination from './Pagination'
function App() {
  
  const [pokemon, setPokemon] = useState([]);
  const [curretPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const controller = new AbortController();
    setLoading(true)
    axios.get(curretPageUrl, {
      signal: controller.signal
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    }).catch(()=>controller.abort())
  }, [curretPageUrl])

  function gotoNextPage(){
    return setCurrentPageUrl(nextPageUrl)
  }
  function gotoPrevPage(){
   return setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
        <h1 className='text-center text-slate-900 md:text-2xl text-lg mt-4'>List Pokemon Names from <a href="https://pokeapi.co/" className='text-sky-500 underline hover:text-sky-600 active:text-pink-700'>pokeapi.co</a></h1>
        {loading && <div className="flex items-center justify-center"><h1 className="text-center text-green-500 my-4 p-2 md:text-4xl  text-2xl transition-all duration-300">Loading...</h1></div>}
        <table className="table mx-auto w-full sm:w-[450x] md:w-[550px] mt-6 mb-1">
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Pokemon</th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto">
              <PokemonList pokemon={pokemon}/>
          </tbody>
        </table>
        <div className='my-3 mx-auto md:p-7 p-2 w-full sm:w-[450x] md:w-[550px]'>
          <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null} />
      </div>
    </>
  )
}

export default App
