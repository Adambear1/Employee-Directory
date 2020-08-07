import React, { useState } from "react";
import Nav from "./components/Navbar";
import Container from "./components/Container";

function App() {
  const [search, setSearch] = useState("");
  function handleInputChange(e) {
    console.log(search);
    setSearch(e.target.value);
  }

  return (
    <div>
      <Nav setSearch={handleInputChange} />
      <Container search={search} />
    </div>
  );
}

export default App;
