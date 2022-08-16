import { Box, Text } from "@chakra-ui/react";

const Globo = ({ data: { title } }) => {
  return (
    <Box p={4} bg="#ccc" borderRadius={10}>
      <Text>{title}</Text>
    </Box>
  );
};

export default Globo;
