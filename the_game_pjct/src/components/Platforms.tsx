import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatForm";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPf: (platform: Platform) => void;
  selectPlatform: Platform | null;
}
const Platforms = ({ onSelectPf, selectPlatform }: Props) => {
  const { data, errors, loading } = usePlatforms();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPf(platform)}>
            {" "}
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platforms;
