import express from 'express';
import multer from 'multer';
import "dotenv/config.js";

const app = express();
const port = process.env.PORT;
const upload = multer({ dest: 'uploads/' })

app.post('/api/get-meta', upload.single('file'), (req, res) => {
    res.send(req.file.mimetype);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});