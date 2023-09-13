import express from "express";
import cors from 'cors';

import { generateUploadURL } from './s3.js'

// Directory stuff
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const PORT = 666

// Middleware
app.use( cors())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} Body:`, req.body);
    next();
})

// Directory
app.get(express.static('../index.html'))

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})

app.listen(PORT, () => console.log('Lyssnar på porten ', PORT))

