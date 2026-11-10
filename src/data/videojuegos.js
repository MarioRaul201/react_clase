// Datos de ejemplo del dashboard
export const videojuegos = [
  { id: 1, nombre: 'The Legend of Zelda: Ocarina of Time', genero: 'Aventura', plataforma: 'Nintendo', anio: 1998, puntuacion: 9.9 },
  { id: 2, nombre: 'Super Mario Odyssey', genero: 'Plataformas', plataforma: 'Nintendo', anio: 2017, puntuacion: 9.7 },
  { id: 3, nombre: 'God of War', genero: 'Acción', plataforma: 'PlayStation', anio: 2018, puntuacion: 9.4 },
  { id: 4, nombre: 'The Last of Us', genero: 'Aventura', plataforma: 'PlayStation', anio: 2013, puntuacion: 9.5 },
  { id: 5, nombre: 'Halo Infinite', genero: 'Shooter', plataforma: 'Xbox', anio: 2021, puntuacion: 8.7 },
  { id: 6, nombre: 'Forza Horizon 5', genero: 'Carreras', plataforma: 'Xbox', anio: 2021, puntuacion: 9.2 },
  { id: 7, nombre: 'Minecraft', genero: 'Aventura', plataforma: 'PC', anio: 2011, puntuacion: 9.3 },
  { id: 8, nombre: 'Counter-Strike 2', genero: 'Shooter', plataforma: 'PC', anio: 2023, puntuacion: 8.2 },
  { id: 9, nombre: 'Mario Kart 8 Deluxe', genero: 'Carreras', plataforma: 'Nintendo', anio: 2017, puntuacion: 9.2 },
  { id: 10, nombre: 'Hollow Knight', genero: 'Plataformas', plataforma: 'PC', anio: 2017, puntuacion: 9.0 },
  { id: 11, nombre: 'Spider-Man 2', genero: 'Acción', plataforma: 'PlayStation', anio: 2023, puntuacion: 9.0 },
  { id: 12, nombre: 'Elden Ring', genero: 'RPG', plataforma: 'PC', anio: 2022, puntuacion: 9.6 },
]

// Valores únicos para las opciones de los filtros
export const generos = [...new Set(videojuegos.map((j) => j.genero))]
export const plataformas = [...new Set(videojuegos.map((j) => j.plataforma))]
