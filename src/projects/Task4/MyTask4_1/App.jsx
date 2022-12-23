import React, { useState } from 'react';
import Rey from './Rey';
import './rey.css';

const reyes=[
   {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      img: 'https://www.html6.es/img/rey_atanagildo.png',
   },
   {
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      img: 'https://www.html6.es/img/rey_ervigio.png',
   },
   {
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      img:'https://www.html6.es/img/rey_ata%C3%BAlfo.png',
   },
   {
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      img: 'https://www.html6.es/img/rey_leogivildo.png',
   },
   {
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      img: 'https://www.html6.es/img/rey_recesvinto.png',
   },
   {
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      img: 'https://www.html6.es/img/rey_sisebuto.png',
   }
];

const App = () => {
   const [total, setTotal] = useState(0);

   return (
      <div>
         <h1>Reyes Godo</h1>
            <h2>Total a pagar : ${total}</h2>
         <div className='reyes'>
            <Rey data={reyes[0]} set={setTotal}/>
            <Rey data={reyes[1]} set={setTotal}/>
            <Rey data={reyes[2]} set={setTotal}/>
            <Rey data={reyes[3]} set={setTotal}/>
            <Rey data={reyes[4]} set={setTotal}/>
            <Rey data={reyes[5]} set={setTotal}/>
         </div>
      </div>
   );
}

export default App;
