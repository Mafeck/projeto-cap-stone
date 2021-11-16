import image from "../../../../assets/desktopHomeImage.png";
import { Image, Container } from "./style";

const DesktopImage = () => {
  return (
    <Container>
      <Image src={image} alt="services" />
    </Container>
  );
};

export default DesktopImage;
