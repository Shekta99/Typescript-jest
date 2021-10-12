import React from "react";
import CheckboxWithLabel from "./components/CheckBoxWithLabel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hola Ada School</p>
        <CheckboxWithLabel labelOff={"Apagado"} labelOn={"Encendido"} />
      </header>
    </div>
  );
}

export default App;
