import "./App.css";

import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: 0, backgroundColor: "beige" }}>
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
    </div>
  );
}

export default App;
