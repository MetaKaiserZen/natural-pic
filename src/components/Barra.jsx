import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Barra = () =>
{
    return (
        <div>
            <Navbar bg="success">
                <Container>
                    <Link to="/"><Navbar.Brand style={{ color: 'white' }}>Home</Navbar.Brand></Link>
                    <Link to="/favoritos"><Navbar.Brand style={{ color: 'white' }}>Favoritos</Navbar.Brand></Link>
                </Container>
            </Navbar>
        </div>
    );
}

export default Barra;
