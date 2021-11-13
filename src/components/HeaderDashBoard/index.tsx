import { useState } from "react";
import { Container, UserPerfil, PerfilOptions, LargerModal } from "./styles";
import { AiFillEdit } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

const HeaderDashBoard = () => {
  const { user, setUser, token } = useUser();
  const [renderOptions, setRenderOptions] = useState<boolean>(false);
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const history = useHistory();

  const editPerfil = () => {
    api
      .patch(`/users/${Object.values(user)[1]}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error.data.response));
  };

  return (
    <Container>
      <h1>HAKI</h1>
      <UserPerfil>
        <h2>Felipe Matheus</h2>
        <div
          onClick={() => {
            if (renderOptions === false) {
              setRenderOptions(true);
            } else {
              setRenderOptions(false);
            }
          }}
          className="perfil"
        >
          <div className="perfil--1"></div>
          <div className="perfil--2"></div>
        </div>
        {renderOptions && (
          <PerfilOptions>
            <div
              onClick={() => {
                setRenderModal(true);
                setRenderOptions(false);
              }}
              className="editPerfil"
            >
              <div className="divIcon">
                <AiFillEdit />
              </div>
              <span>Clique aqui para editar.</span>
            </div>
            <div
              onClick={() => {
                history.push("/login");
                localStorage.clear();
              }}
              className="logout"
            >
              <div className="divIcon">
                <FiLogOut />
              </div>
              <span>Clique aqui para sair.</span>
            </div>
          </PerfilOptions>
        )}
        {renderModal && (
          <LargerModal onClick={() => setRenderModal(false)}></LargerModal>
        )}
      </UserPerfil>
    </Container>
  );
};

export default HeaderDashBoard;
