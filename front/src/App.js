import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/about";
import Detail from "./components/Detail/details";
import Favorites from "./components/Favorites/Favorites";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  const location = useLocation();
  const [characters, setCharacter] = useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = "nico@nico.com";
  const password = "Password1";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onSearch = (characterID) => {
    fetch(`http://localhost:3001/rickandmorty/character/${characterID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
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
    <div style={{ padding: 0, margin: 0 }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
