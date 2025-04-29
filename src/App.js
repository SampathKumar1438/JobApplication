import React, { useState } from "react"; // <<< Added
import Filter from "./components/Filter";
import CardGrid from "./components/CardGrid";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";

function App() {
  const [reload, setReload] = useState(false);

  const handleJobCreated = () => {
    setReload(!reload); // trigger reload
  };

  return (
    <div>
      <NavBar onJobCreated={handleJobCreated} />
      <Filter />
      <div className="container mt-5">
        <CardGrid reload={reload} /> {/* <<< Pass reload */}
      </div>      
    </div>
  );
}

export default App;
