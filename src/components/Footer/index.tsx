import { BsHouseDoor } from 'react-icons/bs';
import { Container } from './style';
import { useHistory } from 'react-router';

const Footer = () => {
    const history = useHistory();

    return (
        <Container>
            <button>
                <BsHouseDoor onClick={() => history.push('/home')} />
            </button>
        </Container>
    )
}

export default Footer;