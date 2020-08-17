import React, { useState } from 'react';

function Buscador({datosConsulta}){

    // State para Buscador
    const [busqueda, guardarBusqueda] = useState({
        termino : ''
    })

    // Se crea el evento para obtener la información
    const handleChange = e => {
        // cambiar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const buscar = e => {
        e.preventDefault();
        // Pasar la búsqueda hacia el componente pricipal
        datosConsulta(busqueda);
    }

    return ( 
        <form onSubmit = { buscar }>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        onChange={ handleChange }
                        type="text" 
                        name="termino" 
                        id="termino" 
                        className="form-control form-control-lg" 
                        placeholder="Busca tu imágen..." 
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-success btn-lg btn-block" 
                        value="Buscar" 
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Buscador;

// Acción de búsqueda JS
// document.querySelector('form').addEventListener('submit', function());