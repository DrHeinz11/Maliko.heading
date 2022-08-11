import { Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
