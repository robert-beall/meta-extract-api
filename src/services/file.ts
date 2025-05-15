export const parseFileData = (file: Express.Multer.File): FileInfo => {
    return {
        name: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
    };
}