import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Foto from './Foto';

import MiContexto from '../contexts/MiContexto';

const Galeria = ({ fav = false }) =>
{
    const { fotos } = useContext(MiContexto);

    return (
        <Container>
            <Row style={{ textAlign: '-webkit-center' }}>
                {fotos.filter((filtro) =>
                {
                    if (fav)
                    {
                        return filtro.liked ? filtro : null;
                    }
                    else
                    {
                        return filtro;
                    }
                }).map((data) =>
                {
                    return <Col key={data.id}><Foto fav={fav} foto={data}></Foto></Col>
                })}
            </Row>
        </Container>
    );
}

export default Galeria;
