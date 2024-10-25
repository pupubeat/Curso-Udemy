import express from 'express'
import 'dotenv/config'
import { engine, create } from 'express-handlebars';
import loginRoute from './routes/auth.route.js'
import homeRoute from './routes/home.route.js'
import './database/data.js'

const app = express();
const hbs = create({
    extname: '.hbs',
    partialsDir: ['views/partials']
});

// Configurar Handlebars.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

// Middlewares para activar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos públicos.
app.use(express.static('public'));

// Rutas.
app.use('/', homeRoute)
app.use('/login', loginRoute)

// Conectar al puerto 3000 o a uno en específico.
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening http://localhost:${PORT}`);
})