import { HeaderStyle, HeaderMenu } from "./style";
import Logo from "../../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const history = useHistory();

  return (
    <>
      {openMenu ? (
        <HeaderMenu>
          <HeaderStyle>
            <div>
              <img src={Logo} alt="logo" onClick={() => history.push("/")}/>
              <AiOutlineClose onClick={() => setOpenMenu(false)} />
            </div>
          </HeaderStyle>
          <div className="menu">
            <a href="/#quemSomos" onClick={() => setOpenMenu(false)}>Quem somos</a>
            <a href="/#nossosServiços" onClick={() => setOpenMenu(false)}>Nossos Serviços</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Cadastrar</Link>
          </div>
        </HeaderMenu>
      ) : (
        <HeaderStyle>
          <div className="mobile">
            <img src={Logo} alt="logo" onClick={() => history.push("/")}/>
            <FaBars onClick={() => setOpenMenu(true)} />
          </div>
          <div className="desktop">
            <img src={Logo} alt="logo" onClick={() => history.push("/")}/>
            <div className="menu">
              <a href="/#quemSomos">Quem somos</a>
              <a href="/#nossosServiços">Nossos Serviços</a>
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
