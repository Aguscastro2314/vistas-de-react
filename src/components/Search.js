import React, { useState } from 'react';
import { RiArrowLeftLine, RiSearchLine, RiMicLine, RiMusic2Line } from 'react-icons/ri';
import './Search.css';

const Search = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      title: 'Música',
      description: 'Artistas, bandas y los mejores conciertos',
      icon: <RiMusic2Line size={20} />
    },
    {
      id: 2,
      title: 'Música',
      description: 'Artistas, bandas y los mejores conciertos',
      icon: <RiMusic2Line size={20} />
    },
    {
      id: 3,
      title: 'Música',
      description: 'Artistas, bandas y los mejores conciertos',
      icon: <RiMusic2Line size={20} />
    },
    {
      id: 4,
      title: 'Música',
      description: 'Artistas, bandas y los mejores conciertos',
      icon: <RiMusic2Line size={20} />
    },
    {
      id: 5,
      title: 'Música',
      description: 'Artistas, bandas y los mejores conciertos',
      icon: <RiMusic2Line size={20} />
    }
  ];

  const handleSearch = () => {
    console.log('Buscando:', searchQuery);
  };

  const handleVoiceSearch = () => {
    console.log('Búsqueda por voz activada');
  };

  const handleCategoryClick = (category) => {
    console.log('Categoría seleccionada:', category.title);
  };

  return (
    <div className="search-container">
      {/* Header */}
      <header className="search-header">
        <button className="back-button" onClick={() => onNavigate('home')}>
          <RiArrowLeftLine size={24} />
        </button>
        <div className="search-input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Descubré eventos increibles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <RiSearchLine size={20} />
          </button>
        </div>
      </header>

      {/* Categories Section */}
      <div className="categories-section">
        <h2 className="categories-title">Categorias</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => handleCategoryClick(category)}
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-content">
                <div className="category-name">{category.title}</div>
                <div className="category-description">{category.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search; 