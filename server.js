const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Menampilkan halaman utama dari file index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint wajib untuk pengecekan kesehatan server (/health)
app.get('/health', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});