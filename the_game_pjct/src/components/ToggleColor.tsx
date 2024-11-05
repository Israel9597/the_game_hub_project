import { Text, Switch, useColorMode, HStack, Flex } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap" fontSize="30px">
        {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
      </Text>
    </HStack>
  );
};

export default ToggleColor;
