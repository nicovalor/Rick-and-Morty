import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
//import characters from "./data.js";
import Nav from "./components/Nav/Nav";
import { useState } from "react";

function App() {
  const [characters, setCharacter] = useState([]);

  const onSearch = (characterID) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!isRepited(data.id)) {
            setCharacter((prevState) => [...prevState, data]);
          } else {
            window.alert("EL personaje ya esta en pantalla !!!");
          }
        } else {
          window.alert("No se encontro tu personaje !!!");
        }
      });
  };

  const isRepited = (id) => {
    let aux = false;
    characters.forEach((char) => {
      if (id === char.id) aux = true;
    });
    return aux;
  };

  const onClose = (characterID) => {
    setCharacter(characters.filter((char) => char.id !== characterID));
  };
  return (
    <div
      className="App"
      style={{ padding: 0, backgroundColor: "beige", margin: 0 }}
    >
      <Nav onSearch={onSearch} />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
