export const parseFileData = (file: Express.Multer.File): FileInfo => {
    return {
        name: file.filename,
        type: file.mimetype,
    };
}