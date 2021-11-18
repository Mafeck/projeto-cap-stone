import HeaderDashBoard from "../../components/HeaderDashBoard";
import { RegisterClientStyled } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaClient } from "../../components/schemaClient";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { useState } from "react";
import jwtDecode from "jwt-decode";

interface Process {
  numberProcess: string;
  area: string;
}

export interface ClientData {
  name: string;
  cpf: string;
  genre: string;
  naturalness: string;
  nationality: string;
  fatherName: string;
  motherName: string;
  qualification: string;
  company: string;
  phone: string;
  type: string;
  maritalStatus: string;
  road: string;
  zipCode: string;
  district: string;
  houseNumber: string;
  process: Process;
}

export interface Decode {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const RegisterClient = () => {
  const { token } = useAuth();
  const [tokenDecode] = useState<Decode>(jwtDecode(token));
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientData>({ resolver: yupResolver(schemaClient) });

  const createClient = (data: ClientData) => {
    const newData = {
      name: data.name,
      cpf: data.cpf,
      genre: data.genre,
      naturalness: data.naturalness,
      nationality: data.nationality,
      fatherName: data.fatherName,
      motherName: data.motherName,
      qualification: data.qualification,
      company: data.company,
      phone: data.phone,
      type: data.type,
      maritalStatus: data.maritalStatus,
      address: {
        road: data.road,
        zipCode: data.zipCode,
        district: data.district,
        houseNumber: data.houseNumber,
      },
      comments: [],
    };

    api
      .post(`/users/${tokenDecode.sub}/people`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Novo cliente adicionado");
        history.push("/dashboard");
      })
      .catch(() => toast.error("Erro ao adicionar cliente"));
  };

  return (
    <div>
      <HeaderDashBoard />
      <RegisterClientStyled>
        <form className="formClient" onSubmit={handleSubmit(createClient)}>
          <div className="formDesktop">
            <div>
              <Input
                width={"280px"}
                placeholder="Nome completo"
                name="name"
                type="text"
                register={register}
                error={errors.name?.message}
              />
              <Input
                placeholder="000.000.000-00"
                name="cpf"
                type="number"
                register={register}
              />
              <Input
                placeholder="Gênero"
                name="genre"
                type="text"
                register={register}
              />
              <Input
                placeholder="Naturalidade"
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </RegisterClientStyled>
      <Footer />
    </div>
  );
};

export default RegisterClient;
