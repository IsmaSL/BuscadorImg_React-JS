import React, { useState, useEffect } from 'react';
import Buscador from './Components/Buscador';
import Error from './Components/Error'
import Resultado from './Components/Resultado'

function App() {

  // State Principal
  const [termino, guardarTermino] = useState ('');
  const [error, guardarError] = useState (false);
  const [resultado, guardarResultado] = useState ({});

  useEffect(() => {
    // prevenir ejecucución
    if (termino==='') return;
      // Consultar API
      // ----> Meter este método sobrecarga useEffect pero
      //       en la documentación los ejemplos son así
      const consultarAPi = async () => {
        const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}`;
        // Consultar URL
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
      }

    consultarAPi();
  }, [ termino ]);

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

        <Resultado 
        
        />

      </div>
    </div>
  );
}

export default App;
