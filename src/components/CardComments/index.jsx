import { ReactComponent as Trash } from '../../assets/trash.svg'
import { Container } from './style';

const Comments = () => {

    

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