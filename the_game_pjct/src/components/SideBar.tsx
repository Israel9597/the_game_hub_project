import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  setFilterName: (selected: Genre) => void;
  filterName: Genre | null;
}
const SideBar = ({ setFilterName, filterName }: Props) => {
  const { data, loading, errors } = useGenres();
  if (errors) return null;
  if (loading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="2px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={filterName?.id === genre?.id ? "bold" : "normal"}
              fontSize="lg"
              variant="link"
              onClick={() => setFilterName(genre)}
            >
              {genre.name}{" "}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBar;
