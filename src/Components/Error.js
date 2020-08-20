import React from 'react';
// Es una función donde recibe el mensaje de Resultado
function Error({mensaje}) {
    // Lo que se va a visualizar
    return(
        <div className="row">
            <div className="col-12 mt-5">
                <div className="alert alert-dimissible alert-danger p-5 text-center esq2"> 
                    <button type="button" className="close ml-3" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Ops!</strong> { mensaje }
                </div>
            </div>
        </div>
    )
}

export default Error;