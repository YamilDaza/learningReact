import React from 'react';
import MyProfile from './myProfile';
import img1 from '../Task1/reyesIMG/rey_ataulfo.png';
import img2 from '../Task1/reyesIMG/rey_recesvinto.png';
import img3 from '../Task1/reyesIMG/rey_ervigio.png';

const styles = {
   header:{
      textAlign:'center',
      margin:'2rem',
   },
   profile: {
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center',
   } 
}

const MyTask3 = () => {

   const names = ['Rey Ataulfo', 'Rey Recesvinto', 'Rey Ervigio'];

   return (
      <>
         <div style={styles.header}>
            <h1>My Homework Three - React</h1>
         </div>
         <div style={styles.profile}>
            <MyProfile name={names[0]} img={img1}/>
            <MyProfile name={names[1]} img={img2}/>
            <MyProfile name={names[2]} img={img3}/>
         </div>
      </>
   );
}

export default MyTask3;
