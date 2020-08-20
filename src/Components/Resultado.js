import React from 'react';
import Imagen from './Imagen'
import Paginacion from './Paginacion';
// Esta función recibe datos del Componente Padre
function Resultado({imagenes, pagAnterior, noPagina, pagSiguiente}) {
    // Se crea el método que visualizará todas las imágenes
    const mostrarImagenes = () => {
        // Comprueba el tamaño del arreglo de las imágenes, si es 0
        // cancela las demás lineas
        if (imagenes.length === 0) return null;
        // Lo que se va a visualizar
        return(
            // Fragment evita crear un cruadro html y permite mostrar 
            // informacíon sin uso de alguna etiqueta html
            <React.Fragment>
                <h2> Resultados de la búsqueda </h2>
                <div className="row col-12 p-5 m-0">
                    { 
                        // Se realiza un recorrido de los arreglos y se
                        // extrae su id y los demas datos por separado;
                        // y luego se envian al componente Imagen
                        imagenes.map(imagen => (
                            <Imagen 
                                key = { imagen.id }
                                imagen = { imagen }
                            />
                        ) ) 
                    }
                </div>
                {/* Se llama al componente Paginacion y se le envía la función de paginación */}
                <Paginacion 
                    pagAnterior = { pagAnterior }
                    noPagina = { noPagina }
                    pagSiguiente = { pagSiguiente }
                />
            </React.Fragment>
        )
    }
    // Lo que se va a visualizar
    return(
        <div className="py-4 text-center">
            {   
                // Se llama el metodo que desplegará todas las imagenes
                mostrarImagenes()
            }
        </div>  
    )
}

export default Resultado;