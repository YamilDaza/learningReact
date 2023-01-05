import React, { useRef } from "react";

const UseRef = () => {
  const refContador = useRef();

  function lector(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  }

  function lectorInput(e) {
    console.log(e.current);
  }

  function convertir() {
    console.log(refContador.current.textContent);
  }

  return (
    <>
      <h1>
        Contador:
        <span onClick={lector} ref={refContador}>
          0
        </span>
      </h1>
      <button onClick={convertir}>Convertir</button>
      <div>
        <input type="number" onChange={lectorInput} />
      </div>
    </>
  );
};

export default UseRef;
