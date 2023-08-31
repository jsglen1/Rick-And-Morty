import React, { Fragment, useEffect, useState } from 'react';
import Card from './components/Card';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const response = await data.json();

      setCharacters(response.results);
    }
  
    // llamar la función
    fetchData()
      // capturar el error
      .catch(console.error);
  }, [])
  
  return (
    <Fragment>
      <Navbar/>
      <section className="h-96 dark:bg-gray-800 grid place-content-center">
        <p className='text-8xl font-black text-white'>The Rick and Morty API</p>
      </section>

      <div className="grid grid-cols-2 mt-20 mx-28 gap-6 mb-4">
        {
          characters.map(character => (
            <Card character={character} key={character.id}/>
          ))
        }
      </div>
      <Footer/>
    </Fragment>
  )
}

export default App
