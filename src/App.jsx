import { Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import logo from "./assets/Vector 632.png";
import logoText from "./assets/Text-logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Image src={logo} />
      <Image src={logoText} />
      <Heading>
        Edit <code>src/App.jsx</code> and save to test HMR
      </Heading>
      <Text className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Text>
    </div>
  );
}

export default App;
