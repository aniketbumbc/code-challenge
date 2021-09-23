import { useEffect, useState } from "react";

import "./App.css";
import { fetchDogsFromApi } from "./app/utils";

function App() {
  const [dogs, setDogs] = useState(null);
  useEffect(() => {
    fetchDogsFromApi({}).then((response) => setDogs(response));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>welcome to our challenge, relax and have fun ! 🐶</p>
      </header>
    </div>
  );
}

export default App;
