import { Heading, Image, Text, Stack, chakra } from "@chakra-ui/react";
import HeadingImg from "./assets/Vector 632.png";
import HeadingLogo from "./components/HeadingLogo";
import NavIcons from "./components/NavIcons";
import NavItems from "./components/NavItems";
const points = {
  pointStart: "#ccc126",
  pointEnd: "#422ccc",
};
const linkItems = [
  { key: 1, title: "portfolio", url: "http://google.com" },
  { key: 2, title: "about me", url: "http://google.com" },
  { key: 3, title: "my blog", url: "http://google.com" },
  { key: 4, title: "review", url: "http://google.com" },
  { key: 5, title: "contact me", url: "http://google.com" },
];

function App() {
  return (
    <chakra.div
      className="App"
      maxW={"1200px"}
      width="100%"
      margin="0 auto"
      //      display={"flex"}
      //      alignItems="center"
      //      flexDirection="column"
    >
      <Stack direction="row" spacing={{ base: 3, md: 12 }} align="center">
        <NavIcons />
        {linkItems.map((e) => (
          <NavItems key={e.key} linkItems={e} />
        ))}
      </Stack>
      <Stack direction="row" align="center" justify="center">
        <HeadingLogo colors={points} />
        <Image src={HeadingImg} />
      </Stack>
    </chakra.div>
  );
}

export default App;
