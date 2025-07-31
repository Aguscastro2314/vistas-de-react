import React, { useState } from 'react';
import './Reproductor.css';
import { 
  RiArrowLeftLine, 
  RiShareLine, 
  RiPlayFill, 
  RiPauseFill,
  RiSkipBackLine,
  RiSkipForwardLine,
  RiCastLine,
  RiHome4Line, 
  RiSearchLine, 
  RiNotification3Line, 
  RiMicLine 
} from 'react-icons/ri';

const Reproductor = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('1:15');
  const [totalTime, setTotalTime] = useState('165:26');
  const [progress, setProgress] = useState(25);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    // Lógica para retroceder 15 segundos
    console.log('Retroceder 15 segundos');
  };

  const handleFastForward = () => {
    // Lógica para adelantar 30 segundos
    console.log('Adelantar 30 segundos');
  };

  const handleConnect = () => {
    // Lógica para conectar a un dispositivo
    console.log('Conectar a un dispositivo');
  };

  return (
    <div className="reproductor-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content */}
      <div className="player-content">
        {/* Header Elements */}
        <div className="player-header-elements">
          <button className="back-button" onClick={() => onNavigate('home')}>
            <RiArrowLeftLine size={24} />
          </button>
          <div className="player-title-container">
            <h1 className="player-title">El Agasajo Morning Show</h1>
            <p className="player-subtitle">Podcast</p>
          </div>
          <button className="share-button">
            <RiShareLine size={20} />
          </button>
        </div>

        {/* Artwork */}
        <div className="artwork-container">
          <div className="artwork">
            <div className="artwork-background">
              <div className="artwork-overlay">
                <div className="station-logo">
                  <div className="logo-circle">
                    <span className="logo-text">92.5</span>
                    <span className="logo-subtext">LA MEJOR</span>
                  </div>
                </div>
                <div className="artwork-text">FM 92.5 MEJOR</div>
              </div>
            </div>
            <div className="artwork-people">
              <div className="person person-1">👨</div>
              <div className="person person-2">👨</div>
              <div className="person person-3">👨</div>
              <div className="person person-4">👩</div>
            </div>
            <div className="artwork-title">EL AGASAJO MORNING SHOW</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-container">
            <span className="time-display current-time">{currentTime}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              <div className="progress-handle"></div>
            </div>
            <span className="time-display total-time">{totalTime}</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="controls-section">
          <button className="control-button rewind" onClick={handleRewind}>
            <div className="control-icon-container">
              <RiSkipBackLine size={24} />
            </div>
            <span className="control-text">15</span>
          </button>
          
          <button className="control-button play-pause" onClick={handlePlayPause}>
            {isPlaying ? <RiPauseFill size={32} /> : <RiPlayFill size={32} />}
          </button>
          
          <button className="control-button fast-forward" onClick={handleFastForward}>
            <div className="control-icon-container">
              <RiSkipForwardLine size={24} />
            </div>
            <span className="control-text">30</span>
          </button>
        </div>

        {/* Show Information */}
        <div className="show-info">
          <h2 className="show-title">El Agasajo Morning Show</h2>
          <p className="show-subtitle">El agasajo morning show</p>
        </div>

        {/* Connect Button */}
        <div className="connect-section">
          <button className="connect-button" onClick={handleConnect}>
            <RiCastLine size={20} />
            <span className="connect-text">Conectar a un dispositivo</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item" onClick={() => onNavigate('home')}>
          <RiHome4Line className="nav-icon" size={24} />
          <span className="nav-label">Inicio</span>
        </div>
        <div className="nav-item" onClick={() => onNavigate('search')}>
          <RiSearchLine className="nav-icon" size={24} />
        </div>
        <div className="nav-item">
          <RiNotification3Line className="nav-icon" size={24} />
        </div>
        <div className="nav-item">
          <RiMicLine className="nav-icon" size={24} />
        </div>
      </nav>
    </div>
  );
};

export default Reproductor; 