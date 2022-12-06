import React from 'react';
import './css/Profile.css'

const Profile = ({ name, img }) => {
   return (
      <div className='profile'>
         <img src={img} />
         <p>{name}</p>
      </div>
   );
}

export default Profile;
