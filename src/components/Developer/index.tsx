import { Link } from "react-router-dom";
import Icon from "../../assets/linkedin.svg";
import { DevelopBox } from "./style";

interface DeveloperProps {
  image?: string;
  name: string;
  link?: string;
}

const Developer = ({ image, name, link }: DeveloperProps) => {
  return (
    <DevelopBox>
      <img src={image} alt="dev" />
      <span>{name}</span>
      {link && (
        <Link to={link}>
          <img src={Icon} alt="linkedin" />
        </Link>
      )}
    </DevelopBox>
  );
};

export default Developer;
