import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Favoritos from './views/Favoritos';

import Barra from './components/Barra';

import MiContexto from './contexts/MiContexto';

function App()
{
    const [fotos, setFotos] = useState([]);

    const estadoGlobal = { fotos, setFotos }

    async function obtenerDatos()
    {
        const response = await fetch('/fotos.json');

        const data = await response.json();

        setFotos(data.photos);
    }

    useEffect(() =>
    {
        obtenerDatos();
    }, [])

    return (
        <div className="App">
            <MiContexto.Provider value={estadoGlobal}>
                <BrowserRouter>
                    <Barra></Barra>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
                    </Routes>
                </BrowserRouter>
            </MiContexto.Provider>
        </div>
    );
}

export default App;
