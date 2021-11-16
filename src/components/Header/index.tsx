import { HeaderStyle, HeaderMenu } from "./style";
import Logo from "../../assets/Logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <>
            {openMenu ?
                <HeaderMenu>
                    <HeaderStyle>
                        <div>
                            <img src={Logo} alt="logo"/>
                            <AiOutlineClose onClick={() => setOpenMenu(false)}/>
                        </div>
                    </HeaderStyle>
                    <div className="menu">
                        <a href="#quemSomos">Quem somos</a>
                        <a href="#nossosServiços">Nossos Serviços</a>
                        <a href="/login">Login</a>
                        <a href="/register">Cadastrar</a>
                    </div>
                </HeaderMenu>
                :
                <HeaderStyle>
                    <div className="mobile">
                        <img src={Logo} alt="logo"/>
                        <FaBars onClick={() => setOpenMenu(true)}/>
                    </div>
                    <div className="desktop">
                        <img src={Logo} alt="logo"/>
                        <div className="menu">
                            <a href="#quemSomos">Quem somos</a>
                            <a href="#nossosServiços">Nossos Serviços</a>
                            <a href="/login">Login</a>
                            <a href="/register">Cadastrar</a>
                        </div>
                    </div>
                </HeaderStyle>
            }
        </>
    );
};

export default Header;