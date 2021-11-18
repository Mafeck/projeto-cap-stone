import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaClient } from "../../components/schemaClient";
import { useForm } from "react-hook-form";
import HeaderDashBoard from "../../components/HeaderDashBoard";
import { toast } from "react-toastify";
import { RegisterClientStyled } from "../RegisterClient/style";
import { TitleBox } from "./style";
import { ReactComponent as PageClientIcon } from "../../assets/pageClientIcon.svg";
import { useAuth } from "../../providers/Auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { Decode } from "../RegisterClient";
import { useClient } from "../../providers/Client";

interface Comments {
  title: string;
  comment: string;
  id: number;
}

// interface Address {
//   road?: string;
//   zipCode?: string;
//   district?: string;
//   houseNumber?: string;
// }

// interface Process {
//   processNumber?: string;
//   area?: string;
// }

interface ClientData {
  name: string;
  cpf?: string;
  genre?: string;
  naturalness?: string;
  nationality?: string;
  fatherName?: string;
  motherName?: string;
  qualification?: string;
  company?: string;
  phone?: string;
  type: string;
  maritalStatus?: string;
  comments?: Comments[];
  id: number;
  userId: string;
  road?: string;
  zipCode?: string;
  district?: string;
  houseNumber?: string;
  processNumber?: string;
  area?: string;
}

const EditClient = () => {
  const { token } = useAuth();
  const { client, setClient } = useClient();
  const [tokenDecode] = useState<Decode>(jwtDecode(token));
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({ resolver: yupResolver(schemaClient) });

  useEffect(() => {
    api
      .get(`/user/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const people = response.data;
        const clientId = localStorage.getItem("@id:haki");
        const newClient = people.find(
          (value: ClientData) => value.id === Number(clientId)
        );
        setClient(newClient);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/user/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        reset({
          name: response.data[0].name,
          cpf: response.data[0].cpf,
          genre: response.data[0].genre,
          naturalness: response.data[0].naturalness,
          nationality: response.data[0].nationality,
          fatherName: response.data[0].fatherName,
          motherName: response.data[0].motherName,
          qualification: response.data[0].qualification,
          company: response.data[0].company,
          phone: response.data[0].phone,
          type: response.data[0].type,
          maritalStatus: response.data[0].maritalStatus,
          road: response.data[0].address.road,
          zipCode: response.data[0].address.zipCode,
          district: response.data[0].address.district,
          houseNumber: response.data[0].address.houseNumber,
          processNumber: response.data[0].process.processNumber,
          area: response.data[0].process.area,
          comments: response.data[0].comments,
        });
      });
  }, []);

  const updateClient = (data: ClientData) => {
    const clientId = localStorage.getItem("@id:haki");

    api
      .patch(`/people/${clientId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Cliente atualizado!");
        history.push(`/dashboard/people/${clientId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <HeaderDashBoard />
      <TitleBox>
        <div className="frontBox">
          <h1>Editar cliente</h1>
          <PageClientIcon />
        </div>
      </TitleBox>
      <RegisterClientStyled>
        <form className="formClient" onSubmit={handleSubmit(updateClient)}>
          <div className="formDesktop">
            <div>
              <Input
                width={"280px"}
                placeholder={client.name}
                name="name"
                type="text"
                register={register}
                error={errors.name?.message}
              />
              <Input
                placeholder={`${client.cpf}`}
                name="cpf"
                type="number"
                register={register}
              />
              <Input
                placeholder={`${client.genre}`}
                name="genre"
                type="text"
                register={register}
              />
              <Input
                placeholder={`${client.naturalness}`}
                name="naturalness"
                type="text"
                register={register}
              />
              <Input
                placeholder="Nacionalidade"
                name="nationality"
                type="text"
                register={register}
              />
              <Input
                placeholder="Nome do pai"
                name="fatherName"
                type="text"
                register={register}
              />
              <Input
                placeholder="Nome da mãe"
                name="motherName"
                type="text"
                register={register}
              />
              <Input
                placeholder="Digite algo"
                name="qualification"
                type="text"
                register={register}
              />
              <Input
                placeholder="Empresa onde trabalha"
                name="company"
                type="text"
                register={register}
              />
            </div>
            <div>
              <Input
                width={"280px"}
                placeholder="(00) 9.9999-9999"
                name="phone"
                type="number"
                register={register}
              />
              <Input
                placeholder="Tipo de pessoa"
                name="type"
                type="text"
                register={register}
                error={errors.type?.message}
              />
              <Input
                placeholder="Estado civil"
                name="maritalStatus"
                type="text"
                register={register}
              />
              <p>Endereço completo:</p>
              <Input
                placeholder="Rua"
                name="road"
                type="text"
                register={register}
              />
              <Input
                placeholder="Código postal"
                name="zipCode"
                type="number"
                register={register}
              />
              <Input
                placeholder="Bairro"
                name="district"
                type="text"
                register={register}
              />
              <Input
                placeholder="Número da casa"
                name="houseNumber"
                type="number"
                register={register}
              />
              <p>Processo:</p>
              <Input
                placeholder="N do processo"
                name="processNumber"
                type="number"
                register={register}
              />
              <Input
                placeholder="Área"
                name="area"
                type="text"
                register={register}
              />
            </div>
          </div>
          <Button type="submit">Atualizar</Button>
        </form>
      </RegisterClientStyled>
      <Footer />
    </div>
  );
};

export default EditClient;
