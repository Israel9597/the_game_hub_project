import { Image, ImageProps } from "@chakra-ui/react";
import bulleyes from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbsUp from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emojis = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bulleyes, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emojis;
