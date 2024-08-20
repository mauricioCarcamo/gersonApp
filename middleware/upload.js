import multer from "multer";
import path from "path";

// Configuración del almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Carpeta de destino para las imágenes
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Nombre único del archivo
    }
  });
  
  // Filtros para tipos de archivo (opcional)
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('No se puede subir el archivo. Solo se permiten imágenes.'), false);
    }
  };
  
  export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  });
  
  