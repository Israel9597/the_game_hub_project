import { Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ToggleColor from "./ToggleColor";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Nav = ({ onSearch }: Props) => {
  return (
    <Flex padding="10px">
      <Image boxSize="50px" src={Logo} alt="" />
      <SearchInput onSearch={onSearch} />
      <Spacer />
      <ToggleColor />
    </Flex>
  );
};

export default Nav;
