import { Heading, Image, Text, Stack, chakra, Box } from "@chakra-ui/react";
import HeadingImg from "./assets/Vector 632.png";
import HeaderLogo from "./assets/HeaderLogo.svg";
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
    <Stack
      maxW={"1200px"}
      width="100%"
      h="100vh"
      overflow={"hidden"}
      margin="0 auto"
      px={{ base: 2, md: 5, lg: 10 }}

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
      <Stack direction="row" align="center" justify="space-between">
        <Stack
          zIndex="12"
          spacing={8}
          transform="translateY(-100px)"
          maxW={{ base: "100%", md: "50%" }}
        >
          <Text
            fontSize={{ base: 20, md: 22 }}
            w="fit-content"
            transform={{
              base: "translateY(36px)",
              lg: "translateY(65px)",
              md: "translateY(40px)",
            }}
          >
            Hello World. I am
          </Text>
          <Stack display="flex">
            <Image
              src={HeaderLogo}
              maxW={{ base: "250px", sm: "425px" }}
              w="100%"
              objectFit={"cover"}
            />
          </Stack>
          <Text fontSize={{ base: 14, md: 16, lg: 20 }} w="fit-content">
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded
            incommode.
          </Text>
          <Cta />
        </Stack>
        <Box
          boxSize={"3xl"}
          width="fit-content"
          margin={{ base: "0 !important", md: "auto" }}
        >
          <Image
            margin="0 auto"
            w={{ base: "325px", lg: "auto" }}
            position={{ base: "absolute", md: "inherit" }}
            zIndex="2"
            left={{ base: "3rem", sm: "13rem", md: "none" }}
            src={HeadingImg}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
