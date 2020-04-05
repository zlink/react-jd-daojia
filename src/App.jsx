import React from "react";
import Wings from "./layouts/Wings";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Wings>
        <Header />
      </Wings>
      <Nav action="home" />
    </>
  );
}

export default App;
