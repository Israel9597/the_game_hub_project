import { Badge } from "@chakra-ui/react";

interface Props {
  meta: number;
}
const Metacritics = ({ meta }: Props) => {
  const colors = meta > 90 ? "green" : meta > 70 ? "yellow" : "red";
  return (
    <Badge colorScheme={colors} borderRadius="4px" paddingX="2">
      {meta}
    </Badge>
  );
};

export default Metacritics;
