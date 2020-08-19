import React from 'react';
// Imagen recibe información de Resultado
const Imagen = (props) => {
    // Se crea una variable constante para no repetir código.
    // Lo que se hace es extraer los datos del arreglo de cada
    // imagen proveniente del props.imagen
    const { largeImageURL, likes, previewURL, tags, views} = props.imagen;
    // Lo que se va a visualizar
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src = { previewURL } alt = { tags } className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{ likes } Me gusta</p>
                    <p className="card-text">{ views } Vistas</p>
                    <a className="btn btn-block btn-success esq" href = { largeImageURL } target="_blank" rel="noopener noreferrer">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
    // Solo se agregan los elementos a usar entre llaves
}

export default Imagen;