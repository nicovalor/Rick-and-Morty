import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/about";
import Detail from "./components/Detail/details";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

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
    <div style={{ padding: 0, backgroundColor: "beige", margin: 0 }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
