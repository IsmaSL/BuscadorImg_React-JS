import React from 'react';
// Imagen recibe información de Resultado
const Imagen = (props) => {
    // Se crea una variable constante para no repetir código.
    // Lo que se hace es extraer los datos del arreglo de cada
    // imagen proveniente del props.imagen
    const { largeImageURL, likes, webformatURL, tags, views} = props.imagen;
    // Lo que se va a visualizar
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src = { webformatURL } alt = { tags } className="card-img-top" />
                <div className="card-body justify-content-center">
                    <p className="card-text align-self-center text-center">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill mr-2 text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                        { likes }

                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-dash mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
                        </svg>

                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill mr-2 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>                        
                        { views }
                    </p>
                    <a className="btn btn-block btn-success esq" href = { largeImageURL } target="_blank" rel="noopener noreferrer">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
    // Solo se agregan los elementos a usar entre llaves
}

export default Imagen;