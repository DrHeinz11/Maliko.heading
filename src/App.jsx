import { Heading, Image, Text } from "@chakra-ui/react";
import HeadingImg from "./assets/Vector 632.png";
import HeadingLogo from "./components/HeadingLogo";
import NavIcons from "./components/NavIcons";
const points = {
  pointStart: "#ccc126",
  pointEnd: "#422ccc",
};
function App() {
  return (
    <div className="App">
      <Image src={HeadingImg} />
      <Heading>
        Edit <code>src/App.jsx</code> and save to test HMR
      </Heading>
      <Text className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Text>
      <HeadingLogo colors={points} />
      <NavIcons />
    </div>
  );
}

export default App;
