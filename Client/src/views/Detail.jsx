import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState({});
   const [error, setError] = useState(null);
   const apiUrl = `http://localhost:3001/rickandmorty/character/${id}`;

   useEffect(() => {
      axios.get(apiUrl)
         .then(response => {
            const { data } = response;
            if (data.name) {
               setCharacter(data);
            } else {
               setError('No hay personajes con ese ID');
            }
         })
         .catch(error => {
            setError('Hubo un error al obtener los datos');
         });

      // Limpia el personaje y el error al desmontar el componente
      return () => {
         setCharacter({});
         setError(null);
      };
   }, [apiUrl, id]);

   return (
      <div>
         {error ? (
            <div>{error}</div>
         ) : (
            <div>
               <h2>{character?.name}</h2>
               <h2>{character?.status}</h2>
               <h2>{character?.species}</h2>
               <h2>{character?.gender}</h2>
               <h2>{character?.origin?.name}</h2>
               <img src={character?.image} alt={character?.name} />
            </div>
         )}
      </div>
   );
}

export default Detail;

