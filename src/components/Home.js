import React, { useState } from 'react';
import './Home.css';
import { RiHome4Line, RiSearchLine, RiNotification3Line, RiMicLine } from 'react-icons/ri';
 
import userIcon from '../assets/Icono.png';

// Componente del logo personalizado
const LogoWithWaves = () => {
  return (
    <div className="home-logo">
      <div className="home-logo-text">
        <span className="home-logo-mi">Mi</span>
        <span className="home-logo-emisoras">emisoras</span>
      </div>
    </div>
  );
};

const Home = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('Podcast');
  const categories = ['Podcast', 'Deportes', 'Teatro', 'Entretenimiento'];
  
  const recommendedContent = [
    {
      id: 1,
      title: 'La mejor 92.5 - Aquí nomas',
      subtitle: 'La Mejor FM 92.5',
      tag: '¡AQUÍ NOMÁS!',
      date: 'Jueves 11 jun.',
      time: '9:00 pm',
      isLiked: true,
      bgColor: '#0066cc',
      type: 'radio'
    },
    {
      id: 2,
      title: 'Papis',
      subtitle: 'Programa familiar',
      date: 'Domingo',
      time: '8:00 am',
      isLiked: false,
      bgColor: '#8b4513',
      type: 'family'
    }
  ];

  const trendingContent = [
    {
      id: 1,
      title: 'Grupera',
      subtitle: 'Música grupera',
      bgColor: '#dc143c',
      type: 'music'
    },
    {
      id: 2,
      title: 'Balad Roma',
      subtitle: 'Música romántica',
      bgColor: '#4169e1',
      type: 'music'
    }
  ];

  const handleCardClick = (item) => {
    if (item.type === 'video') {
      console.log('Reproduciendo video:', item.title);
    } else {
      onNavigate('reproductor');
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-app-header">
        <div className="home-user-icon">
          <img src={userIcon} alt="User" width={32} height={32} style={{ borderRadius: '50%' }} />
        </div>
        <LogoWithWaves />
      </header>

      {/* Welcome Message */}
      <div className="home-welcome-section">
        <h1 className="home-welcome-title">Hola, Darley Salazar</h1>
        <h2 className="home-welcome-subtitle">Bienvenido a mi emisoras</h2>
      </div>

      {/* Categories */}
      <div className="home-categories-section">
        <div className="home-categories-list">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`home-category-button ${activeCategory === category ? 'home-active' : ''}`}
              onClick={() => handleCategoryClick(category)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="home-content-section">
        <h3 className="home-section-title">Recomendados para ti</h3>
        <div className="home-content-cards">
          {recommendedContent.map((item) => (
            <div key={item.id} className="home-card-container">
              <div 
                className={`home-content-card home-recommended ${item.type}`} 
                style={{backgroundColor: item.bgColor}}
                onClick={() => handleCardClick(item)}
              >
                <div className="home-card-content">
                  <div className="home-card-title">{item.subtitle}</div>
                  {item.tag && <div className="home-card-tag">{item.tag}</div>}
                </div>
              </div>
              <div className="home-card-info-external">
                <div className="home-card-main-title">
                  {item.title}
                  {item.isLiked && <span className="home-heart-icon">❤️</span>}
                </div>
                <div className="home-card-meta">
                  {item.date} {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="home-content-section">
        <h3 className="home-section-title">Tendencia</h3>
        <div className="home-content-cards">
          {trendingContent.map((item) => (
            <div key={item.id} className="home-card-container">
              <div 
                className="home-content-card home-trending" 
                style={{backgroundColor: item.bgColor}}
                onClick={() => onNavigate('reproductor')}
              >
                <div className="home-card-content">
                  <div className="home-card-title">{item.title}</div>
                  <div className="home-card-subtitle">{item.subtitle}</div>
                </div>
              </div>
              <div className="home-card-info-external">
                <div className="home-card-main-title">
                  {item.title}
                </div>
                <div className="home-card-meta">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="home-bottom-nav">
        <div className="home-nav-item home-active">
          <RiHome4Line className="home-nav-icon" size={24} />
          <span className="home-nav-label">Inicio</span>
        </div>
        <div className="home-nav-item" onClick={() => onNavigate('search')}>
          <RiSearchLine className="home-nav-icon" size={24} />
        </div>
        <div className="home-nav-item">
          <RiNotification3Line className="home-nav-icon" size={24} />
        </div>
        <div className="home-nav-item">
          <RiMicLine className="home-nav-icon" size={24} />
        </div>
      </nav>
    </div>
  );
};

export default Home; 