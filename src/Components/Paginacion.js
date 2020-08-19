import React from 'react';
// Paginacion recibe funciones de Resultado
const Paginacion = props => {
    // Lo que se va a visualizar
    return(
        <div className="py-3">
            <button type="button" onClick={props.pagAnterior} className="btn btn-info mr-4 esq">&larr; Anterior</button>
            <button type="button" onClick={props.pagSiguiente} className="btn btn-info esq">Siguiente &rarr;</button>
        </div>
    )
    // Los botones para la paginación funcionan con in listener onClick
}

export default Paginacion;