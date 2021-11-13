import { useState } from "react";
import { Container, UserPerfil, PerfilOptions } from "./styles";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import logo from "../../assets/Group 51.svg";

const HeaderDashBoard = () => {
  const { user, setUser, token } = useUser();
  const [renderOptions, setRenderOptions] = useState<boolean>(false);
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>("");
  const history = useHistory();

  const editPerfil = () => {
    const data = {
      username: newUsername,
    };

    api
      .patch(`/users/${Object.values(user)[1]}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        setNewUsername("");
      })
      .catch((error) => console.log(error.data.response));
  };

  return (
    <Container>
      <img src={logo} alt="logo" />
      <UserPerfil>
        <h2>{Object.values(user)[0]}</h2>
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
                <FiEdit color="#80ed99" />
              </div>
              <main>
                <h6>Editar Perfil</h6>
                <span>Clique aqui para editar</span>
              </main>
            </div>
            <div
              onClick={() => {
                history.push("/login");
                localStorage.clear();
              }}
              className="logout"
            >
              <div className="divIcon">
                <FiLogOut color="#ffaa00" />
              </div>
              <main>
                <h6>Sair</h6>
                <span>Clique aqui para sair</span>
              </main>
            </div>
          </PerfilOptions>
        )}
        {renderModal && (
          <Modal
            onClose={() => {
              if (renderModal === true) {
                setRenderModal(false);
              } else {
                setRenderModal(true);
              }
            }}
            modalTitle="Editar perfil"
          >
            <Input
              onChange={(event) => setNewUsername(event.target.value)}
              placeholder="New username"
            />
            <Button onClick={editPerfil}>Editar</Button>
          </Modal>
        )}
      </UserPerfil>
    </Container>
  );
};

export default HeaderDashBoard;
