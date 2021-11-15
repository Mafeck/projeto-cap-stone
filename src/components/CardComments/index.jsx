import { ReactComponent as Trash } from '../../assets/trash.svg'
import { Container } from './style';
import api from '../../services';
import { useUser } from '../../providers/User';
import { useState } from 'react';

const Comments = () => {
    const [update, setUpdate] = useState("");
    const [createComment, setCreateComment] = useState(false); // p/ o modal

    const {token} = useUser();

    const handleUpdate = (data) => {

        api
            .patch('', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setUpdate(response)
                setCreateComment(false);
            })
            .catch((error) => console.log(error))
    }

    return(
        <Container>
            <h1>Nome do Cliente</h1>
            <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</p>
            <div>
                <input type='date'></input>
                <Trash />
            </div>
        </Container>
    )
}

export default Comments;