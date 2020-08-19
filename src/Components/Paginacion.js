import React from 'react';

const Paginacion = props => {
    return(
        <div className="py-3">
            <button type="button" onClick={props.pagAnterior} className="btn btn-info mr-1 esq">&larr; Anterior</button>
            <button type="button" onClick={props.pagSiguiente} className="btn btn-info esq">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;