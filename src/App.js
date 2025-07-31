// Importamos React y el hook useState para manejar el estado
import React, { useState } from 'react';
// Importamos los estilos CSS
import './App.css';
// Importamos los componentes que usaremos
import Home from './components/Home';
import Reproductor from './components/Reproductor';
import Search from './components/Search';

// Definimos el componente principal App
function App() {
  // Creamos un estado para controlar la pantalla actual
  // Inicialmente mostramos la pantalla 'home'
  const [currentScreen, setCurrentScreen] = useState('home');

  // Función que decide qué componente renderizar según la pantalla actual
  const renderScreen = () => {
    // Usamos un switch para manejar los diferentes casos
    switch (currentScreen) {
      case 'home':
        // Si la pantalla es 'home', mostramos el componente Home
        // Le pasamos la función setCurrentScreen como prop 'onNavigate'
        return <Home onNavigate={setCurrentScreen} />;
      case 'reproductor':
        // Si la pantalla es 'reproductor', mostramos el componente Reproductor
        return <Reproductor onNavigate={setCurrentScreen} />;
      case 'search':
        // Si la pantalla es 'search', mostramos el componente Search
        return <Search onNavigate={setCurrentScreen} />;
      default:
        // Por defecto, mostramos el componente Home
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  // El componente App renderiza un contenedor principal
  // Dentro de él llamamos a la función renderScreen para mostrar
  // el componente correspondiente
  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

// Exportamos el componente App como default
export default App;
