# Mi Emisoras - Aplicación de Radio y Podcasts

Una aplicación móvil moderna para escuchar radio y podcasts, diseñada con React y un enfoque en la experiencia de usuario.

## 🎵 Características

### 📱 Pantalla Principal (Home)
- **Header personalizado** con logo "Mi emisoras" y perfil de usuario
- **Mensaje de bienvenida** personalizado
- **Categorías de contenido** (Podcast, Deportes, Teatro, Entretenimiento)
- **Sección de recomendados** con tarjetas interactivas
- **Sección de tendencias** con contenido popular
- **Navegación inferior** con iconos intuitivos

### 🎧 Reproductor de Audio
- **Artwork personalizado** con diseño de estación de radio
- **Controles de reproducción** (play/pause, retroceder 15s, adelantar 30s)
- **Barra de progreso** con tiempo actual y total
- **Información del programa** con título y descripción
- **Botón de conectar dispositivo** para streaming
- **Navegación fluida** entre pantallas

### 🔍 Pantalla de Búsqueda
- **Barra de búsqueda** con placeholder atractivo
- **Categorías de búsqueda** organizadas
- **Teclado virtual** funcional con diseño Google
- **Búsqueda por voz** integrada
- **Navegación intuitiva** con botones de retorno

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework principal
- **CSS3** - Estilos modernos y responsivos
- **JavaScript ES6+** - Funcionalidad interactiva
- **Emojis** - Iconografía nativa para mejor rendimiento

## 📦 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd emisora
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm test` - Ejecuta las pruebas
- `npm run build` - Construye la aplicación para producción
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: #ff4444 (Rojo)
- **Secundario**: #0066cc (Azul)
- **Neutro**: #f5f5f5 (Gris claro)
- **Texto**: #000000 (Negro) / #666666 (Gris)

### Tipografía
- **Familia**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Tamaños**: 12px - 28px según jerarquía
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Interacciones
- **Hover effects** en botones y tarjetas
- **Transiciones suaves** (0.2s - 0.3s)
- **Animaciones de entrada** para nuevas pantallas
- **Feedback visual** en interacciones

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 480px
- **Tablets**: 481px - 768px
- **Desktop**: 769px+

### Breakpoints principales
```css
@media (max-width: 480px) {
  /* Estilos para móviles */
}
```

## 🔧 Estructura del Proyecto

```
emisora/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Home.js          # Pantalla principal
│   │   ├── Home.css
│   │   ├── Reproductor.js   # Reproductor de audio
│   │   ├── Reproductor.css
│   │   ├── Search.js        # Pantalla de búsqueda
│   │   └── Search.css
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos globales
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos base
├── package.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Navegación
- ✅ Navegación entre pantallas
- ✅ Botones de retorno funcionales
- ✅ Navegación inferior interactiva

### Interactividad
- ✅ Tarjetas de contenido clickeables
- ✅ Controles de reproducción
- ✅ Búsqueda por texto
- ✅ Categorías seleccionables

### Diseño
- ✅ Diseño fiel a las imágenes de referencia
- ✅ Colores y tipografía exactos
- ✅ Layout responsivo
- ✅ Animaciones suaves

## 🔮 Próximas Mejoras

- [ ] Integración con API de radio real
- [ ] Reproducción de audio real
- [ ] Sistema de favoritos
- [ ] Notificaciones push
- [ ] Modo offline
- [ ] Temas personalizables
- [ ] Integración con redes sociales

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o soporte, contacta a:
- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [tu-usuario-github]

---

**¡Disfruta escuchando tu música favorita con Mi Emisoras! 🎵**
