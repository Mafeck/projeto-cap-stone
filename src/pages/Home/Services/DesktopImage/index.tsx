import image from "../../../../assets/desktopHomeImage.png";
import { GreenBox, Image, Container } from "./style";

const DesktopImage = () => {
  return (
    <Container>
      <GreenBox />
      <Image src={image} alt="services" />
    </Container>
  );
};

export default DesktopImage;
