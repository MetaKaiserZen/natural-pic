import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';

import MiContexto from '../contexts/MiContexto';

import { FaHeart } from 'react-icons/fa';

const Foto = ({ fav, foto }) =>
{
    const { fotos, setFotos } = useContext(MiContexto);

    const setFavorito = (id) =>
    {
        const fotoConClick = fotos.findIndex((foto) => foto.id === id);

        fotos[fotoConClick].liked = !fotos[fotoConClick].liked

        setFotos([...fotos]);
    }

    return (
        <Card style={{ width: '18rem', margin: '2em' }}>
            <Card.Img variant="top" src={foto.src.medium} style={{ minHeight: '15em', maxHeight: '15em' }}></Card.Img>
            {!fav && <Button onClick={() => setFavorito(foto.id)}
                style={
                {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    margin: '1em',
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}>
                <FaHeart size={'2em'} style={{ color: foto.liked ? 'red' : 'white' }}></FaHeart>     
            </Button>}
            <Card.Body
                style=
                {{
                    color: 'white',
                    position: 'absolute',
                    bottom: 0
                }}>
                {foto.alt}
            </Card.Body>
        </Card> 
    );
}

export default Foto;
