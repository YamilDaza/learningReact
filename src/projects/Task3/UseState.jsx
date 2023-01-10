import "./styles.css";
import React, { useState } from "react";

const Counter = () => {
   const [counter, setCounter] = useState(0);

   function increase() {
      setCounter(counter + 1);
   }
   function reset() {
      setCounter(0);
   }
   function decrease() {
      setCounter(counter - 1);
   }

   return (
      <>
         <h1>UseState example Two - Counter</h1>
         <div>
            <h2>{counter}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrease}>Decrease</button>
         </div>
      </>
   );
};

const UseState = () => {
   /*   let nombre = "Yamil";*/
   /*   let edad = 24; */
   /* let [name, age] = ["Yamil", 24]; */
   /* console.log(`Hi, I am ${name} and have ${age} years`); */

   const [fullName, setFullName] = useState("Yamil");

   function changeName() {
      if (fullName === "Yamil") {
         setFullName("Developer");
      } else {
         setFullName("Yamil");
      }
      console.log(fullName); //Primer instancia undefined
   }

   return (
      <>
         <h1>Learning React</h1>
         <div>
            <h2>Hi, I am {fullName}</h2>
            <button onClick={changeName}>Change name</button>
         </div>
         <div>
            <Counter />
         </div>
      </>
   );
};

export default UseState;
