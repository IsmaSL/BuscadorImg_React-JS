import React, { useState } from 'react';
// Buscador señala la función que está en compnente padre App
function Buscador({datosConsulta}){
    // State para Buscador
    const [dato, guardarDato] = useState({
        // termino solo sirve como un álias para cuando se revisan los componentes en consola
        termino : ''
    })
    // Se crea el evento para obtener la información
    const handleChange = e => {
        // cambiar el state
        guardarDato({
            // Se crea una copia del estado actual
            ...dato,
            // luego se sustituye
            [e.target.name] : e.target.value
        });
    }
    // Crea el evento de búsqueda
    const buscar = e => {
        // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
        e.preventDefault();
        // Pasar la búsqueda hacia el componente padre por medio de la función
        datosConsulta(dato);
    }
    // Lo que se va a visualizar
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