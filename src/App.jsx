import { Button, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/Input/PrimaryInput";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            name="firstName"
            placeholder="ex: Marco"
            onChange={(event) => setFirstName(event.target.value)}
            label="Nome"
          />
          <PrimaryInput
            value={secondName}
            name="Sobrenome"
            placeholder="ex: Viana"
            onChange={(event) => setSecondName(event.target.value)}
            label="Sobrenome"
          />
        </div>

        <Spacer height="8" />

        <PrimaryInput
          value={email}
          placeholder="exemplo@email.com"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          label="E-mail"
        />

        <Spacer height="8" />

        <Button width="100%" colorScheme="green">
          Enviar
        </Button>
      </form>
      <Spacer width="6" maxWidth="4" />
      <div className="product-details">

        <h2>Plano Mensal</h2>
        <Spacer width="4"/>
        <p>você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer width="4"/>
        <p>Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repudiandae quasi quis quos voluptatibus, sint, velit quae laborum vel natus veniam quisquam itaque</p>
      </div>
    </div>
  );
}

export default App;
