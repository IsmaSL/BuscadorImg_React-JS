import React from 'react';

function Error({mensaje}) {
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-dimissible alert-danger alert-block text-center"> 
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <strong>Ops!</strong> { mensaje }
                </div>
            </div>
        </div>
    )
}

export default Error;