import React, { useState, useEffect } from 'react';
import Buscador from './Components/Buscador';
import Error from './Components/Error'
import Resultado from './Components/Resultado'

function App() {
  // State Principal
  const [termino, guardarTermino] = useState ('');
  const [error, guardarError] = useState (false);
  const [resultado, guardarResultado] = useState ({});
  const [imagenes, guardarImagenes] = useState ([]);
  const [pagina, guardarPagina] = useState ('');

  // Volver arriba al cambiar de página
  const scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  // Paginación
  const pagAnterior = () => {
    // Leer state actual
    let pag = pagina;
    // Validar si es la pagina 1 para no retroceder
    if (pagina===1) return null;
    // Restar 1 a la pag actual
    pag--;
    // Agregar cambio state
    guardarPagina(pag);
    scroll();
  }

  const pagSiguiente = () => {
    // Leer state actual
    let pag = pagina;
    // Sumar 1 a la pag actual
    pag++;
    // Agregar cambio state
    guardarPagina(pag);
    scroll();
  }

  useEffect(() => {
    // prevenir ejecucución
    if (termino==='') return;
    
    // Consultar API
    // ----> Meter este método sobrecarga useEffect pero
    //       en la documentación los ejemplos son así
    const consultarAPi = async () => {
      const key = '1732750-d45b5378879d1e877cd1d35a6';
      const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=24&page=${pagina}`;
      // Consultar URL
      // console.log(url);
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
      guardarImagenes(resultado.hits);
    }

    consultarAPi();
  }, [ termino, pagina ]);

  const datosConsulta = datos => {
    // Validar campo de búsqueda
    if (datos.termino === '') {
      guardarError(true);
      return;
    } 
    // Termino existe, agregarlo al State
    guardarTermino(datos.termino);
    guardarPagina('1');
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
      <div className="row justify-content-center">
        <Resultado 
          imagenes = { imagenes }
          pagAnterior = { pagAnterior }
          pagSiguiente = { pagSiguiente }
        />
      </div>
    </div>
  );
}

export default App;
