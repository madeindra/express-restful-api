// inisiasi pembacaan environment variable dari file .env
require('dotenv').config();

// import express
const express = require('express');

// konfigurasi server
const port = process.env.PORT || 3000; // jika di environtment variable tidak ada PORT, atur 3000 secara default

// inisiasi express
const app = express();

// jalankan server
app.listen(port, () => console.log(`Server is running on port ${port}`));