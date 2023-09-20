const commonDetails = {
   status: 'Alive',
   species: 'Human',
   origin: {
     name: 'Earth (Replacement Dimension)',
     url: 'https://rickandmortyapi.com/api/location/20',
   },
 };
 
 export const Rick = {
   id: 1,
   name: 'Rick Sanchez',
   gender: 'Male',
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   ...commonDetails,
 };
 
 const characters = [
   {
     id: 2,
     name: 'Morty Smith',
     gender: 'Male',
     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
     ...commonDetails,
   },
   {
     id: 3,
     name: 'Summer Smith',
     gender: 'Female',
     image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
     ...commonDetails,
   },
   {
     id: 4,
     name: 'Beth Smith',
     gender: 'Female',
     image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
     ...commonDetails,
   },
   {
     id: 5,
     name: 'Jerry Smith',
     gender: 'Male',
     image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
     ...commonDetails,
   },
 ];
 
 export default characters;
 
