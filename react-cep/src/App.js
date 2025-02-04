import logo from "./logo.svg";
import "./App.css";
import Form from "./Form/Form";
import TextCamp from "./TextCamp/TextCamp";
import Button from "./Button/Button";

function App() {
  return (
    <main className="main">
      <Form/>
      <TextCamp placeholder="Digite seu cep" label = "Cep" />
      <Button>Busque o cep</Button>
    </main>
  );
}

export default App;
