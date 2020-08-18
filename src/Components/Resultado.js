import React from 'react';
import Imagen from './Imagen'

function Resultado({imagenes}) {

    const mostrarImagenes = () => {
        if (imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <div className="col-lg-12 row">
                    { 
                        imagenes.map(imagen => (
                            <Imagen 
                                key = { imagen.id }
                                imagen = { imagen }
                            />
                        ) ) 
                    }
                    
                </div>
            </React.Fragment>
        )
    }

    return(
        <div className="py-4 px-5 text-center">
            <h2>Resultados de la búsqueda</h2>

            { mostrarImagenes() }
        </div>  
       
    )
}

export default Resultado;