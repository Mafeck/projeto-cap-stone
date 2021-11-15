import { useEffect, useState } from "react";
import CardClients from "../../components/CardClients";
import api from "../../services/api";
import { ReactComponent as PageClientIcon } from '../../assets/pageClientIcon.svg';
import { Header } from './style';
import Footer from "../../components/Footer";
import { useUser } from "../../providers/User";

// interface User {
//     username: string;
//     email: string;
//     password: string;
//     id: number;
//     phone: string;
//     oab: string;
//     state: string;
// }


// interface Address {
//     road: string;
//     zipCode: string;
//     district: string;
//     houseNumber: string;
// }

// interface Comments {
//     title: string;
//     comment: string;
//     id: number;
// }

// interface Clients {
//     name: string;
//     cpf: string;
//     genre: string;
//     naturalness: string;
//     nationality: string;
//     fatherName: string;
//     motherName: string;
//     qualification: string;
//     company: string;
//     phone: string;
//     type: string;
//     maritalStatus: string;
//     address: Address;
//     comments: Comments[],
//     userId: string;
//     id: number;
// }

// interface ClientsPropsData {
//     tokenTeste?: any;
//     clientsList: Clients[];
// }

const Clients = () => {
    const [tokenTeste, setTokenTeste] = useState(localStorage.getItem("@token:haki") || '');
    const [clientsList, setClientsList] = useState([]);
    
    const {token} = useUser()

    useEffect(() => {
        api
            .get('users/3/people', {
                headers: {
                    Authorization: `Bearer ${tokenTeste}`,
                }
            })
            .then((response) => {
               return setClientsList(response.data)
            })
    })

    return (
        <div>
            <Header>
                <div className='frontBox'>
                    <h1>Lista de clientes</h1>
                    <PageClientIcon />
                </div>
            </Header>
            {clientsList.map((item, index) => {
               return <CardClients key={index} name={item.name} cpf={item.cpf} />
            })}
            <Footer />
        </div>
    )
} 

export default Clients;