import React, { useState, useEffect } from 'react';
import Buscador from './Components/Buscador';
import Error from './Components/Error'
import Resultado from './Components/Resultado'

function App() {
  // State Principal
  // Guarda la(s) palabra(S) que se está buscando recibido del Componente Buscador
  const [termino, guardarTermino] = useState ('');
  // Guarda el estado de la validación de la búsqueda
  const [error, guardarError] = useState (false);
  // Guarda el total de resultados de la búsqueda
  const [total, guardarTotal] = useState ('');
  // Guarda las imágenes de la búsqueda
  const [imagenes, guardarImagenes] = useState ([]);
  // Guarda el estado de la página
  const [pagina, guardarPagina] = useState (0);
  // Volver arriba al cambiar de página
  const scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  // Paginación Anterior
  const pagAnterior = () => {
    // Leer state actual
    let pag = pagina;
    // Validar si es la pagina 1 para no retroceder
    if (pagina===1) return null;
    // Restar 1 a la pag actual
    pag--;
    // Agregar cambio state
    guardarPagina(pag);
    // Ejecuta el scroll para volver al top de la página
    scroll();
  }
  // Paginación Siguiente
  const pagSiguiente = () => {
    // Leer state actual
    let pag = pagina;
    // Sumar 1 a la pag actual
    pag++;
    // Agregar cambio state
    guardarPagina(pag);
    // Ejecuta el scroll para volver al top de la página
    scroll();
  }
  // Función que detecta los cambios
  useEffect(() => {
    // Prevenir ejecucución validando que el campo de busqueda esté lleno y el total de imagenes
    if (termino==='' && total==='') return;
    // Consultar API: Meter este método sobrecarga useEffect pero en la documentación está así
    const consultarAPi = async () => {
      try {
        // Es la key para usar la API
        const key = '1732750-d45b5378879d1e877cd1d35a6';
        // Es la url compuesta por la key, la pabra a buscar y la página en la que está actualmente
        const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=24&page=${pagina}`;
        // Consultar URL con Fetch
        const respuesta = await fetch(url);
        // Convierte la respuesta a JSON
        const resultado = await respuesta.json();
        // Se guardan la cantidad de resultados
        guardarTotal(resultado.total);
        // Se guardan las imágenes
        guardarImagenes(resultado.hits);
      } catch (er) {
        console.log('ERROR: '+er);
      }
      // Nota: al momento en el que arroja la respuesta, este es un Arreglo que contiene varios elementos,
      //       los que se usan son Total y Hits; Total contiene la cantidad de resultados de la búsqueda
      //       y Hits contiene varios arreglos con la información de cada imagen relacionada a la búsqueda.
    }
    // Ejecuta el metodo para la API
    consultarAPi();
  }, [ termino, total, pagina ]); // ---> Estos son los sets que usa para leer su estado actual
  // Este método consulta la información que recibe del componente Busqueda para validar su llegada
  const datosConsulta = datos => {
    // Validar campo de búsqueda
    if (datos.termino === '') {
      // Si no está lleno, se cambia el estado de Error a verdader
      guardarError(true);
      // Cancela las lineas restantes dentro de la función
      return;
    } 
    // Termino está lleno, agregarlo al State
    guardarTermino(datos.termino);
    // Ponemos por default que la página inicia en 1
    guardarPagina(1);
    // "Por si acaso" volvemos a establecer el error como falso
    guardarError(false);
  }
  // Cargando un componente condicional (componente Error)
  let componente;
  // Validamos el estado del error
  if(error){
    // Hay un error, mostrarlo llamando al componente y enviando un mensaje
    componente = <Error mensaje='Campo vacio, no se puede reallizar la búsqueda.' />
  } else if( total === 0 ){
    // Se realizó la búsqueda pero No se encontraron resultados
    componente = <Error mensaje='No se encontraron coincidencias.' />
  } else {
    // No hay error, por lo tanto se realizó la búsqueda y retornó la información
    componente = <Resultado 
                    imagenes = { imagenes }
                    pagAnterior = { pagAnterior }
                    pagSiguiente = { pagSiguiente }
                />
  }
  // Lo que se va a visualizar
  return (
    <div className="app container p-0">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        {/* Se llama al componente Buscador, que manda información al componente App */}
        <Buscador 
          datosConsulta = { datosConsulta }
        />
      </div>
      <div className="row justify-content-center">
         {/* Aquí se llama al componente condicional, depende de su resultado */}
        { componente }
      </div>
    </div>
  );
}

export default App;