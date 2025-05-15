import express from 'express';
import fs from 'fs';
import multer from 'multer';
import "dotenv/config.js";
import { parseFileData } from './services/file.ts';

const app = express();
const port = process.env.PORT;
const upload = multer({ dest: 'uploads/' })

app.post('/api/get-meta', upload.single('file'), async (req, res) => {
    if (typeof req.file === 'undefined') {
        res.status(404).send('File not found');
        return;
    }

    const data: FileInfo = parseFileData(req.file);

    fs.unlink(req.file.path, (err) => {
        if (err) {
            console.error('Failed to delete file');
        }
    })

    res.send(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});