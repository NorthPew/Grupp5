import express from "express";

import { generateUploadURL } from './s3.js'

const app = express()

const PORT = 666

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} Body:`, req.body);
    next();
})

app.get('/s3Url', async (req, res) => {
    const url = await generateUploadURL()
    res.send({url})
})

app.listen(PORT, () => console.log('Lyssnar på porten ', PORT))

