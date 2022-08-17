import { Heading, Image, Text, Stack, chakra } from "@chakra-ui/react";
import HeadingImg from "./assets/Vector 632.png";
import HeadingLogo from "./components/HeadingLogo";
import NavLogo from "./components/NavLogo";
import NavItems from "./components/NavItems";
import Globo from "./components/Globo";
import Cta from "./components/Cta";
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
      h="100vh"
      overflow={"hidden"}
      width="100%"
      margin="0 auto"

      //      display={"flex"}
      //      alignItems="center"
      //      flexDirection="column"
    >
      <Stack
        direction="row"
        spacing={{ base: 3, md: 12 }}
        py={2}
        align="center"
        justify="space-between"
      >
        <NavLogo />
        {linkItems.map((e) => (
          <NavItems key={e.key} linkItems={e} />
        ))}
      </Stack>
      <Stack direction="row" align="center" justify="center">
        <Stack spacing={8} transform="translateY(-100px)">
          <Text fontSize={22} w="fit-content" transform="translateY(65px)">
            Hello World. I am
          </Text>
          <HeadingLogo colors={points} />
          <Text fontSize={20} w="fit-content">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </Text>
          <Cta />
        </Stack>
        <Image h="fit-content" src={HeadingImg} />
      </Stack>
    </chakra.div>
  );
}

export default App;
