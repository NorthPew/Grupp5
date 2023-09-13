import express from "express";
import cors from 'cors';
import { generateUploadURL } from './s3.js'

const app = express()

const PORT = 666

// Middleware
app.use(express.json())
app.use( cors())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} Body:`, req.body);
    next();
})

// Directory
app.get(express.static('../index.html'))

app.get('/s3Url', async (req, res) => {
    try {
        const url = await generateUploadURL();
        res.send({ url });
    } catch (error) {
        console.error('Error generating upload URL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log('Lyssnar på porten ', PORT))

