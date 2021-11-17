import FooterIcon from "../../../components/FooterIcon";
import Mail from "../../../assets/mail.svg";
import Location from "../../../assets/location.svg";
import Phone from "../../../assets/phone.svg";
import { FooterBox } from "./style";

const Footer = () => (
  <FooterBox>
    <FooterIcon color="#6184FF" icon={Phone} />
    <FooterIcon color="#61A0FF" icon={Mail} />
    <FooterIcon color="#7BCD83" icon={Location} />
  </FooterBox>
);

export default Footer;
