import { useEffect, useState } from "react";
import CardClients from "../../components/CardClients";
import api from "../../services/api";

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
            {clientsList.map((item, index) => {
               return <CardClients key={index} name={item.name} cpf={item.cpf} />
            })}
        </div>
    )
} 

export default Clients;