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

interface Address {
  road: string;
  zipCode: string;
  district: string;
  houseNumber: string;
}

interface Process {
  numberProcess: string;
  area: string;
}

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
  address?: Address;
  comments?: Comments[];
  process: Process;
  id: number;
  userId: string;
}

const EditClient = () => {
  const { token } = useAuth();
  const { client, setClient } = useClient();
  const [tokenDecode] = useState<Decode>(jwtDecode(token));
  // const [inputName, setInputName] = useState(client.name);
  // const [inputCPF, setInputCPF] = useState(client.cpf);
  // const [inputNationality, setInputNationality] = useState(client.nationality);
  // const [inputGenre, setInputGenre] = useState(client.genre);
  // const [inputNaturalness, setInputNaturalness] = useState(client.naturalness);
  // const [inputFatherName, setInputFatherName] = useState(client.fatherName);
  // const [inputMotherName, setInputMotherName] = useState(client.motherName);
  // const [inputQualification, setInputQualification] = useState(
  //   client.qualification
  // );
  // const [inputCompany, setInputCompany] = useState(client.company);
  // const [inputPhone, setInputPhone] = useState(client.phone);
  // const [inputType, setInputType] = useState(client.type);
  // const [inputMaritalStatus, setInputMaritalStatus] = useState(
  //   client.maritalStatus
  // );
  // const [inputRoad, setInputRoad] = useState(client.address?.road);
  // const [inputZipCode, setInputZipCode] = useState(client.address?.zipCode);
  // const [inputDistrict, setInputDistrict] = useState(client.address?.district);
  // const [inputHouseNumber, setInputHouseNumber] = useState(
  //   client.address?.houseNumber
  // );
  // const [inputProcessNumber, setInputProcessNumber] = useState(
  //   client.process?.numberProcess
  // );
  // const [inputArea, setInputArea] = useState();

  const history = useHistory();
  console.log(client);
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

  const updateClient = (data: ClientData) => {
    console.log(data);
    // const newData = {
    //   name: data.name,
    //   cpf: data.cpf,
    //   genre: data.genre,
    //   naturalness: data.naturalness,
    //   nationality: data.nationality,
    //   fatherName: data.fatherName,
    //   motherName: data.motherName,
    //   qualification: data.qualification,
    //   company: data.company,
    //   phone: data.phone,
    //   type: data.type,
    //   maritalStatus: data.maritalStatus,
    //   address: {
    //     road: data.road,
    //     zipCode: data.zipCode,
    //     district: data.district,
    //     houseNumber: data.houseNumber,
    //   },
    //   process: {
    //     processNumber: data.processNumber,
    //     area: data.area,
    //   },
    //   comments: [],
    // };
    // api
    //   .patch(`/users/${tokenDecode.sub}/people`, newData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(() => {
    //     toast.success("Cliente atualizado!");
    //     history.push(`/users/${tokenDecode.sub}/people`);
    //     console.log(newData);
    //   })
    //   .catch(() => toast.error("Erro ao atualizar o cliente"));
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
                value="123"
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
