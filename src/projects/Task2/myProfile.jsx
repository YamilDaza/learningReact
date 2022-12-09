import React, { useRef } from 'react';
import rey from '../Task1/reyesIMG/rey_incognito.png'

const styles = {
   profile:{
      margin:'0 1rem',
      backgroundColor:'orange',
      padding:'1rem',
      textAlign:'center',
      fontSize:'1.4rem',
      borderRadius:'10px'
   },

   img:{
      cursor:'pointer',
      width:'100%',
   },

   titulo:{
      cursor:'pointer',
   }
};

const MyProfile = ({ name, img }) => {

   const tituloRef = useRef();

   const cambiarTexto = (e) => {
      if(e.target.innerHTML == 'Vacio'){
         e.target.innerHTML = '';
      }else{
         e.target.innerHTML = 'Vacio';
      }
   }

   const cambiarImg = (e) => {
      if(e.target.src.includes('incognito')){
         e.target.style.visibility = 'hidden';
      }else{
         e.target.src = rey;
      }
      e.target.parentNode.style.backgroundColor = 'white';
      tituloRef.current.style.color = 'black';
   }

   return (
      <div style={styles.profile}>
         <img onClick={cambiarImg} style={styles.img} src={img} alt={name}/>
         <h3 ref={tituloRef} onClick={cambiarTexto} style={styles.titulo}>{name}</h3>
      </div>
   );
}

export default MyProfile;
