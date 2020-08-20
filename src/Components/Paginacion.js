import React from 'react';
// Paginacion recibe funciones de Resultado
const Paginacion = props => {
    // Lo que se va a visualizar
    return(
        <div className="pt-3 pb-0">
            <button type="button" onClick={props.pagAnterior} className="btn btn-info mr-4 esq px-3">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-compact-left mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
                Anterior
            </button>
            <button className="btn btn-success mr-4 esq px-3">
                { props.noPagina }
            </button>
            <button type="button" onClick={props.pagSiguiente} className="btn btn-info esq  px-3">
                Siguiente
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-chevron-compact-righ ml-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
            </button>
        </div>
    )
    // Los botones para la paginación funcionan con in listener onClick
}

export default Paginacion;