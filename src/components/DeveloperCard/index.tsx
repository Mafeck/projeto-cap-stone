import { Link } from "react-router-dom";
import Icon from "../../assets/linkedin.svg";
import { DevelopBox } from "./style";

interface DeveloperCardProps {
  image?: string;
  name: string;
  link?: string;
}

const DeveloperCard = ({ image, name, link }: DeveloperCardProps) => {
  return (
    <DevelopBox>
      <img src={image} alt="dev" />
      <span>{name}</span>
      {link && (
        <Link to={link}>
          <img className="linkedin" src={Icon} alt="linkedin" />
        </Link>
      )}
    </DevelopBox>
  );
};

export default DeveloperCard;
