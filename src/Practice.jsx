import React from 'react';

const data = [
   {
      name: 'Service One',
      colour: 'red',
      office: 'Pressure',
      picture: 'https://cdn.icon-icons.com/icons2/3802/PNG/512/blood_donation_hand_medical_icon_233060.png',
   },
   {
      name: 'Service Two',
      colour: 'blue',
      office: 'Vaccinate',
      picture: 'https://cdn.icon-icons.com/icons2/3802/PNG/512/syringe_medicine_vaccination_vaccine_icon_233045.png',
   },
   {
      name: 'Service Three',
      colour: 'green',
      office: 'Diet',
      picture: 'https://cdn.icon-icons.com/icons2/3802/PNG/512/food_healthy_fruit_vegetables_eat_icon_233071.png',
   },
];

const Service = ( props ) => {
   const {name, colour, office, picture} = props.data;
   
   return(
      <>
         <div style={{ backgroundColor: colour, padding: '0.5rem 1rem', margin:'0.5rem', borderRadius: '1rem'}}>
            <h2>{name} - {office}</h2>
            <img style={{ width:' 130px'}} src={picture} alt={office}/>
            <button onClick={() => props.fnClick(office)}>Click</button>
         </div>
      </>
   )   
}


const Practice = ({ children }) => {
   const title = children;

   const btnClick = (service) => alert(`My service is ${service}.`);

   return (
      <>
         <h1>{ title }</h1>
         <div>
            <Service fnClick={btnClick} data={data[0]}/>
            <Service fnClick={btnClick} data={data[1]}/>
            <Service fnClick={btnClick} data={data[2]}/>
         </div>
      </>
   );
}




export default Practice;


