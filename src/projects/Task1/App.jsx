import React from 'react';
import Profile from './Profile';
import img1 from './reyesIMG/rey_ataulfo.png'
import img2 from './reyesIMG/rey_ervigio.png'
import img3 from './reyesIMG/rey_recesvinto.png'
import './css/App.css'

const App = () => {

   const names = ['Rey Ataulfo', 'Rey Ervigio','Rey Recesvinto'];

   return (
      <div>
         <h1>Task One - Course React</h1>
         <div className='contenedor-profile'>
            <Profile name={names[0]} img={img1} ></Profile>
            <Profile name={names[1]} img={img2} ></Profile>
            <Profile name={names[2]} img={img3} ></Profile>
         </div>
      </div>
   );
}

export default App;
