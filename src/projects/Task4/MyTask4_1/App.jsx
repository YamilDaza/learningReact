import React from 'react';
import Rey from './Rey';

const reyes=[
   {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
   },
   {
      nombre:"Ervigio",
      color:"crimson",
      precio:169
   },
   {
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
   },
   {
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
   },
   {
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
   },
   {
      nombre:"Sisebuto",
      color:"teal",
      precio:69
   }
];

const App = () => {
   return (
      <div>
         <h1>Reyes Godo</h1>
         <Rey data={reyes[0]}/>
         <Rey data={reyes[1]}/>
         <Rey data={reyes[2]}/>
         <Rey data={reyes[3]}/>
         <Rey data={reyes[4]}/>
         <Rey data={reyes[5]}/>
      </div>
   );
}

export default App;
