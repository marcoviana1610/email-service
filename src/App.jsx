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

        <Spacer height="4" />
        
        <PrimaryInput
          value={email}
          placeholder="exemplo@email.com"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          label="E-mail"
        />

        <Spacer height="4" />

        <Button
        width="100%"
        colorScheme="green">Enviar</Button>
      </form>
    </div>
  );
}

export default App;
