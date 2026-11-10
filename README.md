# Dashboard de Videojuegos — Práctica de clase con React

Práctica de clase hecha con **React 19**, **Vite** y **Bootstrap 5.3**. Su objetivo es practicar la separación en componentes, el paso de props y los hooks **useState** y **useEffect**.

La app es un dashboard que muestra un catálogo de 12 videojuegos. Las tarjetas se pueden filtrar en tiempo real y la página puede cambiar entre tema claro y oscuro.

## Qué se practica

**Estructura modular**
- Componentes reutilizables (`Navbar`, `Sidebar`, `MainContent`, `VideojuegoCard`, `Login`), comunicados entre sí por props.
- Layout con el Grid de Bootstrap (`row` / `col-*`).

**useState**
- Filtro en tiempo real por nombre, género, plataforma y puntuación mínima.
- Botón para cambiar el tema entre claro y oscuro.
- Sesión simulada con un token guardado en `localStorage`.

**useEffect**
- Petición simulada con `setTimeout` de 1.5 s. Mientras carga se muestra un spinner "Cargando...".
- Aplicar el tema a toda la página (`data-bs-theme`) y recordarlo al recargar.
- Actualizar el título de la pestaña con el número de resultados.

## Estructura

```
src/
├── App.jsx                  Layout y estado compartido (filtros, tema, sesión)
├── components/
│   ├── Navbar.jsx           Barra superior: tema y cerrar sesión
│   ├── Sidebar.jsx          Panel de filtros
│   ├── MainContent.jsx      Carga de datos, spinner y lista filtrada
│   ├── VideojuegoCard.jsx   Tarjeta de un videojuego
│   └── Login.jsx            Inicio de sesión simulado
├── data/videojuegos.js      Datos de ejemplo
└── services/api.js          Petición simulada obtenerVideojuegos()
```

---

Universidad La Salle Chihuahua · Práctica de clase · Mario Raúl Jiménez Villegas
