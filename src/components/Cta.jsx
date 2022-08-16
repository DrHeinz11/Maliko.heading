import { Button } from "@chakra-ui/react";
const Cta = () => {
  return (
    <Button
      color="#fff"
      bg="black"
      px={16}
      py={8}
      borderRadius="none"
      _hover={{ bg: "#353535" }}
      w="fit-content"
    >
      schedule free consultation
    </Button>
  );
};

export default Cta;
