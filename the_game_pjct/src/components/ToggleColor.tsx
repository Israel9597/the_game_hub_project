import { Text, Switch, useColorMode, HStack, Flex } from "@chakra-ui/react";

const ToggleColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Toggle {colorMode === "light" ? "Dark" : "Light"}</Text>
    </HStack>
  );
};

export default ToggleColor;
