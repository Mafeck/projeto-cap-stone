import HeaderDashBoard from "../../components/HeaderDashBoard";
import { RegisterClientStyled } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaClient } from "../../components/schemaClient";
import { toast } from "react-toastify";
import api from "../../services/api";

interface ClientData {
    name: string;
    cpf: string;
    genre: string;
    naturalness: string;
    nationality: string;
    fatherName: string;
    motherName: string;
    qualification: string;
    phone: string;
    type: string;
    maritalStatus: string;
    road: string;
    zipCode: string;
    district: string;
    houseNumber: string;
};

const RegisterClient = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors },
    } = useForm<ClientData>({resolver: yupResolver(schemaClient)});

    const createClient = (data:ClientData) => {
        const newData = {
            name: data.name,
            cpf: data.cpf,
            genre: data.genre,
            naturalness: data.naturalness,
            nationality: data.nationality,
            fatherName: data.fatherName,
            motherName: data.motherName,
            qualification: data.qualification,
            phone: data.phone,
            type: data.type,
            maritalStatus: data.maritalStatus,
            address: {
                road: data.road,
                zipCode: data.zipCode,
                district: data.district,
                houseNumber: data.houseNumber,
            },
            comments: []
        };
    };

    api.post("/users/userId/people")

    return (
        <div>
            <HeaderDashBoard/>
            <RegisterClientStyled>
                <h2>Cadastrar Cliente</h2>
                <form className="formClient">
                    <Input placeholder="Nome"/>
                    <Input placeholder="CPF"/>
                    <Input placeholder="Gênero"/>
                    <Input placeholder="Naturalidade"/>
                    <Input placeholder="Nacionalidade"/>
                    <Input placeholder="Nome do pai"/>
                    <Input placeholder="Nome da mãe"/>
                    <Input placeholder="Qualificação"/>
                    <Input placeholder="Empresa"/>
                    <Input placeholder="(00) 9.9999-9999"/>
                    <Input placeholder="Tipo"/>
                    <Input placeholder="Estado civil"/>
                    <p>Endereço:</p>
                    <Input placeholder="Rua"/>
                    <Input placeholder="Código postal"/>
                    <Input placeholder="Bairro"/>
                    <Input placeholder="Número da casa"/>
                    <Button type="submit">Cadastrar</Button>
                </form>
            </RegisterClientStyled>
            <Footer/>
        </div>
    );
};

export default RegisterClient;