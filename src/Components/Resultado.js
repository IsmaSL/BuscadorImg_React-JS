import React from 'react';
import Imagen from './Imagen'
import Paginacion from './Paginacion';

function Resultado({imagenes, pagAnterior, pagSiguiente}) {

    const mostrarImagenes = () => {

        if (imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <div className="row col-12 p-5 m-0">
                    { 
                        imagenes.map(imagen => (
                            <Imagen 
                                key = { imagen.id }
                                imagen = { imagen }
                            />
                        ) ) 
                    }
                    
                </div>
                <Paginacion 
                    pagAnterior = { pagAnterior }
                    pagSiguiente = { pagSiguiente }
                />
            </React.Fragment>
        )
    }

    return(
        <div className="py-4 text-center">
            <h2>Resultados de la búsqueda</h2>
            { mostrarImagenes() }
        </div>  
       
    )
}

export default Resultado;