import "./styles.css";
import html from "./img/html.svg";
import js from "../src/img/javascript.svg";
import react from "./img/react.svg";

const lenguajes = [
  {
    nombre: "HTML",
    fondo: "orange"
  },
  {
    nombre: "JavaScript",
    fondo: "yellow"
  },
  {
    nombre: "ReactJS",
    fondo: "blue"
  }
];

const Lenguaje = ({ data, img }) => {
  const { nombre, fondo } = data;
  return (
    <div
      style={{
        backgroundColor: `${fondo}`,
        padding: "1rem",
        marginBottom: "1rem"
      }}
    >
      <img alt={`Lenguaje-${nombre}`} src={img} />
      <h1>Lenguaje: {nombre}</h1>
      <p>Color: {fondo}</p>
    </div>
  );
};

const App2 = () => {
  return (
    <div className="App">
      <Lenguaje data={lenguajes[0]} img={html} />
      <Lenguaje data={lenguajes[1]} img={js} />
      <Lenguaje data={lenguajes[2]} img={react} />
    </div>
  );
};

export default App2;