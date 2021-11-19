import FooterIcon from "../../../components/FooterIcon";
import Mail from "../../../assets/mail.svg";
import Location from "../../../assets/location.svg";
import Phone from "../../../assets/phone.svg";
import { FooterBox } from "./style";

const Footer = () => (
  <FooterBox>
    <div className="icons">
      <FooterIcon color="#7BCD83" icon={Location} />
      <p>R. Gen. Mário Tourinho, 1733 - 706 - Seminário, Curitiba - PR, 80740-000</p>
    </div>
    <div className="icons">
      <FooterIcon color="#61A0FF" icon={Mail} />
      <p>hakisoftwarejuridico@gmail.com</p>
    </div>
    <div className="icons">
      <FooterIcon color="#6184FF" icon={Phone} />
      <p>(41) 99232-9867</p>
    </div>
  </FooterBox>
);

export default Footer;
