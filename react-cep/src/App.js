import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import TextCamp from "./TextCamp/TextCamp";
import Button from "./Button/Button";

function App() {
  const [cep, setCEP] = useState(""); 

  return (
    <main className="main">
      <Form />
      <TextCamp
        placeholder="Digite seu cep"
        label="Cep"
        value={cep}
        onChange={(event) => setCEP(event.target.value)} 
      />
      <Button cep={cep}>Busque o cep</Button>
    </main>
  );
}

export default App;
