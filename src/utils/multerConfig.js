import path from "path";
import multer, { diskStorage } from "multer";

const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directorio donde se almacenarán los archivos subidos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + path.extname(file.originalname)); // Nombre del archivo en el servidor
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/; // Expresión regular para tipos de archivo permitidos
    const mimeType = fileTypes.test(file.mimetype);
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    if (mimeType && extName) {
      cb(null, true); // Aceptar el archivo
    } else {
      cb(new Error("Solo se permiten archivos JPEG, JPG o PNG")); // Rechazar el archivo con un mensaje de error
    }
  },

  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB límite de tamaño de archivo
  },
});

export default upload;
