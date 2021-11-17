import { HeaderStyle, HeaderMenu } from "./style";
import Logo from "../../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      {openMenu ? (
        <HeaderMenu>
          <HeaderStyle>
            <div>
              <img src={Logo} alt="logo" />
              <AiOutlineClose onClick={() => setOpenMenu(false)} />
            </div>
          </HeaderStyle>
          <div className="menu">
            <Link to="/">Quem somos</Link>
            <Link to="/">Nossos Serviços</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastrar</Link>
          </div>
        </HeaderMenu>
      ) : (
        <HeaderStyle>
          <div className="mobile">
            <img src={Logo} alt="logo" />
            <FaBars onClick={() => setOpenMenu(true)} />
          </div>
          <div className="desktop">
            <img src={Logo} alt="logo" />
            <div className="menu">
              <Link to="/">Quem somos</Link>
              <Link to="/">Nossos Serviços</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Cadastrar</Link>
            </div>
          </div>
        </HeaderStyle>
      )}
    </>
  );
};

export default Header;
