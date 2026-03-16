import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, path.resolve(__dirname, "../../../uploads"));
    },
    filename: (_req, file, cb) => {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, `${timestamp}${ext}`);
    }
});

const fileFilter = (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Formato inválido. Use jpeg, png ou webp."));
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});
