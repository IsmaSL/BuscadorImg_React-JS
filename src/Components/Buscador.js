import React, { Component } from 'react';

class Buscador extends Component {
    // Se crea una referencia del elemento que va a recibir información
    busquedaRef = React.createRef();
    // Se crea el evento para obtener la información
    obtenerDat = (e) => {
        // Evita que se lea en la parte superior
        e.preventDefault();
        // Imprimo como prueba
        console.log(this.busquedaRef.current.value);
    }
    // Principal
    render() { 
        return ( 
            <form onSubmit={ this.obtenerDat }>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={ this.busquedaRef } type="text" className="form-control form-control-lg" placeholder="Busca tu imágen..." />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-success btn-lg btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;

// Acción de búsqueda JS
// document.querySelector('form').addEventListener('submit', function());