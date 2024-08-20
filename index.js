import express from "express";
import postsRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';
import imagesRoutes from './routes/image.js';
import connectDB from "./config/db.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { cors } from "cors";

// __filename
const __filename = fileURLToPath(import.meta.url);

// __dirname
const __dirname = dirname(__filename);

const app = express()
const PORT = 3000

await connectDB()
// Middleware para parsear JSON
app.use(express.json());
app.use( cors() )
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', postsRoutes)
app.use('/', usersRoutes)
app.use('/', imagesRoutes)

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});