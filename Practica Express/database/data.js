import mongoose from 'mongoose';

mongoose
    .connect(process.env.URI)
    .then(() => console.log('DB conectada'))
    .catch((e) => console.log('Fallo en la conexión a la DB' + e))