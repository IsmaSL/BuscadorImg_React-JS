import React, { useState } from 'react';
import Buscador from './Components/Buscador';
import Error from './Components/Error'

function App() {

  // State Principal
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState (false);

  const datosConsulta = datos => {
    // Validar campo de búsqueda
    if (datos.termino === '') {
      guardarError(true);
      return;
    } 

    // Termino existe, agregarlo al State
    guardarTermino(datos.termino);
    guardarError(false);
  }

  // Cargando un componente condicional (componente Error)
  let componente;
  if(error){
    // Hay un error, mostrarlo
    componente = <Error mensaje='Campo vacio, no se puede reallizar la búsqueda.' />
  } else {
    // No hay error, buscar
    componente = null;
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Buscador 
          datosConsulta = { datosConsulta }
        />

        {componente }

      </div>
    </div>
  );
}

export default App;
