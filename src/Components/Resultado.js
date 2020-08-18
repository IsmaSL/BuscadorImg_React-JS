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
            <h2>Resultado de la búsqueda</h2>
            <p>Hola desde Componente Resultado</p>

            { mostrarImagenes() }
        </div>  
       
    )
}

export default Resultado;