import { useState, useEffect } from "react";
import { Container, UserPerfil, PerfilOptions } from "./styles";
import { FiLogOut, FiEdit } from "react-icons/fi";
import { useUser } from "../../providers/User";
import api from "../../services/api";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import logo from "../../assets/Group 51.svg";
import { useAuth } from "../../providers/Auth";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface DecodeProps {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

interface UserName {
  username: string;
}

const HeaderDashBoard = () => {
  const history = useHistory();
  const { user, setUser } = useUser();
  const { token, Logout } = useAuth();
  const [tokenDecode] = useState<DecodeProps>(jwtDecode(token));
  const [renderOptions, setRenderOptions] = useState<boolean>(false);
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>("");

  const schemaPerfil = yup.object().shape({
    username: yup.string().required("Digite seu novo nome"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaPerfil) });

  useEffect(() => {
    api
      .get(`/users/${tokenDecode.sub}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const patchUser = {
          email: response.data.email,
          id: response.data.id,
          oab: response.data.oab,
          phone: response.data.phone,
          state: response.data.state,
          username: response.data.username,
        };

        setUser(patchUser);
      });
  }, []);

  const editPerfil = (data: UserName) => {
    api
      .patch(`/users/${tokenDecode.sub}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newUser = {
          email: response.data.email,
          username: response.data.username,
          id: response.data.id,
          oab: response.data.oab,
          phone: response.data.phone,
          state: response.data.state,
        };

        setNewUsername("");
        setUser(newUser);
        setRenderModal(false);
        toast.success("Perfil Editado");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <img src={logo} alt="logo" onClick={() => history.push("/dashboard")} />
      <UserPerfil>
        <h2>{user.username}</h2>
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
      </UserPerfil>
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
          <div onClick={Logout} className="logout">
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
          <form style={{ width: "100%" }} onSubmit={handleSubmit(editPerfil)}>
            <Input
              minLength={2}
              error={errors.username?.message}
              name="username"
              register={register}
              onChange={(event) => setNewUsername(event.target.value)}
              placeholder="New username"
            />
            <Button type="submit">Editar</Button>
          </form>
        </Modal>
      )}
    </Container>
  );
};

export default HeaderDashBoard;
