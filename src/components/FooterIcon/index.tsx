import { IconBox } from "./style";

interface FooterIconProps {
  color: string;
  icon: string;
}

const FooterIcon = ({ color, icon }: FooterIconProps) => {
  return (
    <IconBox color={color}>
      <img src={icon} alt="icon" width={18} height={21} />
    </IconBox>
  );
};

export default FooterIcon;
