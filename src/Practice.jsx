// Practice Part1
/* import React from 'react';

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

export default Practice; */







// Practice Part2
/* import React, { useRef } from 'react';

const Practice = () => {
   const myParraf = useRef();
   const contentParraf = useRef();

   function lector(e){
      contentParraf.current.innerHTML = e.target.value;
   }

   return(
      <>
         <h1>UseRef</h1>
         <div>
            <h2 ref={myParraf}>Good evening, Nice to meet you. I am Yamil daza and I work developer Full stack</h2>
            <button onClick={() => console.log(myParraf.current.textContent)}>Info</button>
            <section>
               <div ref={contentParraf}></div>
               <input type='string' onChange={lector}/>
            </section>
         </div>
      </>
   )
}

export default Practice; */




// Practice Part3
import React,{ useState } from 'react';

const Practice = () => {

   const [numberOne, setNumberOne] = useState();
   const [numberTwo, setNumberTwo] = useState();
   const [resultAdd, setResultAdd] = useState(0);

   function toAddNUmbers(){
      setResultAdd(Number(numberOne) + Number(numberTwo));
   }

   const getValueOne = (e) => setNumberOne(e.target.value);
   const getValueTwo = (e) => setNumberTwo(e.target.value);
   

   return(
      <>
         <h1>Calculator</h1>
         <div>
            <h3>enter the values to add:</h3>
            <input value={numberOne} onChange={getValueOne} type='number' /> + 
            <input value={numberTwo} onChange={getValueTwo} type='number'/> =
            <input value={resultAdd} type='number' readOnly/>
            <button onClick={toAddNUmbers}>Calculate</button>
         </div>
      </>
   )
}

export default Practice;










