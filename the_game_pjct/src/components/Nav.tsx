import { Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ToggleColor from "./ToggleColor";

const Nav = () => {
  return (
    <Flex padding="10px">
      <Image boxSize="50px" src={Logo} alt="" />
      <Spacer />
      <ToggleColor />
    </Flex>
  );
};

export default Nav;
